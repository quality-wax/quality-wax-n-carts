import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Brand } from 'src/app/models/brand';
import { CartItem } from 'src/app/models/cart-item';
import { PRODUCTS, Product } from 'src/app/models/product';
import { Quantity } from 'src/app/models/quantity';
import { BrandService } from 'src/app/services/brand.service';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  cartNumber: number = 0
  products = PRODUCTS
  raw_garden: string = ''
  raw_garden_sauce: Product[] = []
  raw_garden_resin: Product[] = []
  brands: Brand[] = new Array()
  searchString = ''
  cartItems: CartItem[] = new Array()
  total: number = 0
  constructor(
    private cartService: CartService,
    private productService: ProductService,
    private router: Router,
    private brandService: BrandService,
  ) { }

  ngOnInit() {
    this.cartService.getCartNumber().subscribe((data) => {
      this.cartNumber = data
      this.total = this.cartService.total()
    })
    this.cartService.getItems().subscribe((data) => {
      this.cartItems = data
    })
    this.brands = this.brandService.getBrands()
    this.products.forEach((product) => {
      if (product.type === 'live_resin') {
        this.raw_garden_resin.push(product)
      } else if (product.type === 'live_sauce') {
        this.raw_garden_sauce.push(product)
      }
    })
    this.brands.forEach((brand) => {
      if (brand.name === 'Raw Garden') {
        this.raw_garden = brand.name
      }
    })
  }

  printQuantity(item: CartItem) {
    let quantities = item.quantities

    let all: string = ''
    for (var i = 0; i < quantities.length; i++) {
      if (i == 0) all = quantities[i].quantity + ' - ' + quantities[i].unit
      else
        all = all + ' & ' + quantities[i].quantity + ' - ' + quantities[i].unit
    }
    return all
  }

  itemTotal(item: CartItem): number {
    let prices = item.product.prices
    let map: Map<string, number> = new Map<string, number>()
    for (var i = 0; i < prices.length; i++) {
      map.set(prices[i].unit, prices[i].amount)
    }

    let total = 0
    item.quantities.forEach((quantity: Quantity) => {
      total += map.get(quantity.unit) * quantity.quantity
    })

    return total
  }

  search() {
    if (this.searchString !== '') {
      this.router.navigate([
        'shop/search/' + this.searchString.replace(' ', '+'),
      ])
    }
  }

  printPrice(price: number) {
    var price_parts = price.toString().split('.')
    price_parts[0] = price_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    return price_parts.join('.')
  }
}
