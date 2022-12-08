import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/cart-item';
import { Product } from 'src/app/models/product';
import { Quantity } from 'src/app/models/quantity';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  private pathToAssets: string = "../../assets/";
  items: CartItem[] = new Array()
  products: Product[] = new Array();

  constructor(private cartService: CartService, private productService: ProductService) {
  }

  ngOnInit() {
    this.cartService.getItems().subscribe((data: CartItem[]) => {
      this.items = data;
    })
    this.products = this.productService.findRandom(6);
  }

  printPrices(item: CartItem): string {
    let prices = item.product.prices;

    let all: string = "";
    for (var i = 0; i < prices.length; i++) {
      if (i == 0)
        all = "$" + prices[i].amount + "/" + prices[i].unit
      else
        all = all + " , " + "$" + prices[i].amount + "/" + prices[i].unit
    }
    return all;
  }

  itemTotal(item: CartItem) {
    let prices = item.product.prices;
    let map: Map<string, number> = new Map<string, number>()
    for (var i = 0; i < prices.length; i++) {
      map.set(prices[i].unit, prices[i].amount)
    }

    let total = 0;
    item.quantities.forEach((quantity: Quantity) => {
      total += map.get(quantity.unit) * quantity.quantity;
    });

    return total;
  }

  delete(item: CartItem) {
    this.items = this.cartService.remove(item)
  }

  printQuantity(item: CartItem) {
    let quantities = item.quantities;

    let all: string = "";
    for (var i = 0; i < quantities.length; i++) {
      if (i == 0)
        all = quantities[i].quantity + " - " + quantities[i].unit
      else
        all = all + " & " + quantities[i].quantity + " - " + quantities[i].unit
    }
    return all;
  }

  total() {
    return this.cartService.total() + 50;
  }

  getPrice(product: Product, unit: string) {
    let price = 0
    product.prices.forEach(p => {
      if (p.unit === unit) {
        price = p.amount
      }
    })
    return price
  }

  deleteUnit(quantity: Quantity, item1: CartItem) {
    this.items.forEach(item => {
      if (item.product == item1.product) {
        for (var i = 0; i < item.quantities.length; i++) {
          if (item.quantities[i].unit == quantity.unit) {
            item.quantities.splice(i, 1)
            break
          }
        }
      }
    })
    this.cartService.saveCart(this.items)
  }

  printPrice(price: number) {
    var price_parts = price.toString().split(".");
    price_parts[0] = price_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return price_parts.join(".");
  }
}
