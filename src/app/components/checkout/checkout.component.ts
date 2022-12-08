import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/models/api/cart';
import { Checkout } from 'src/app/models/api/checkout';
import { ShippingDetails } from 'src/app/models/api/shippingDetails';
import { CartItem } from 'src/app/models/cart-item';
import { Product } from 'src/app/models/product';
import { Quantity } from 'src/app/models/quantity';
import { ApiService } from 'src/app/services/api.service';
import { CartService } from 'src/app/services/cart.service';
import { CartItem as ApiCartItem } from '../../models/api/cartItem';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  isLoading = false;
  buttonMsg = "Place Order";
  paymentOptionList = ["Zelle", "Bitcoin", "Cashapp ", "Paypal ", "Western Union", "MoneyGram"]
  contactOptionList = ["Phone", "SMS", "Email", "Whatsapp", "Telegram"]
  countryList = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Anguilla", "Antigua &amp; Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas"
    , "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia &amp; Herzegovina", "Botswana", "Brazil", "British Virgin Islands"
    , "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Chad", "Chile", "China", "Colombia", "Congo", "Cook Islands", "Costa Rica"
    , "Cote D Ivoire", "Croatia", "Cruise Ship", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea"
    , "Estonia", "Ethiopia", "Falkland Islands", "Faroe Islands", "Fiji", "Finland", "France", "French Polynesia", "French West Indies", "Gabon", "Gambia", "Georgia", "Germany", "Ghana"
    , "Gibraltar", "Greece", "Greenland", "Grenada", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India"
    , "Indonesia", "Iran", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kuwait", "Kyrgyz Republic", "Laos", "Latvia"
    , "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Mauritania"
    , "Mauritius", "Mexico", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Namibia", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia"
    , "New Zealand", "Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal"
    , "Puerto Rico", "Qatar", "Reunion", "Romania", "Russia", "Rwanda", "Saint Pierre &amp; Miquelon", "Samoa", "San Marino", "Satellite", "Saudi Arabia", "Senegal", "Serbia", "Seychelles"
    , "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "South Africa", "South Korea", "Spain", "Sri Lanka", "St Kitts &amp; Nevis", "St Lucia", "St Vincent", "St. Lucia", "Sudan"
    , "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor L'Este", "Togo", "Tonga", "Trinidad &amp; Tobago", "Tunisia"
    , "Turkey", "Turkmenistan", "Turks &amp; Caicos", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "United States Minor Outlying Islands", "Uruguay"
    , "Uzbekistan", "Venezuela", "Vietnam", "Virgin Islands (US)", "Yemen", "Zambia", "Zimbabwe"];

  items: CartItem[] = new Array()
  shipping: ShippingDetails = new ShippingDetails();
  cardInfo: string;
  constructor(private cartService: CartService, private apiService: ApiService,) {
    // this.shipping.paymentOption = this.paymentOptionList[0]
    // this.shipping.contactOption = this.contactOptionList[0]
    // this.shipping.country = this.countryList[0]
  }

  ngOnInit() {
    this.cartService.getItems().subscribe((data: CartItem[]) => {
      this.items = data;
    })
  }

  total() {
    return this.cartService.total();
  }

  submit() {
    this.isLoading = true;
    this.buttonMsg = "Loading...";
    if (this.items.length < 1) {
      Swal.fire({
        title: 'Oops!',
        text: 'Your cart is empty try adding some items to your cart before trying to checkout',
        icon: 'warning',
        confirmButtonText: 'Ok got it!',
        confirmButtonColor: '#7cca31',
      })
      this.isLoading = false;
      this.buttonMsg = "Place Order";
    } else {
      let checkout = new Checkout();
      let cart = new Cart()
      this.items.forEach((value: CartItem) => {
        let apiCartItem: ApiCartItem = new ApiCartItem();
        apiCartItem.productName = value.product.name;
        apiCartItem.productQuantities = this.formatQuantity(value);
        apiCartItem.productTotal = this.itemTotal(value)
        cart.cartItems.push(apiCartItem)
      })
      cart.grandTotal = this.cartService.total();
      checkout.cart = cart;
      checkout.shippingDetails = this.shipping;
      this.apiService.checkout(checkout)
        .subscribe((data: any) => {
          this.isLoading = true;
          this.shipping = new ShippingDetails()
          this.cartService.purge()
          Swal.fire({
            title: 'Thanks!',
            text: 'Thank you! Your order has been received. We will contact you as soon as possible',
            icon: 'success',
            confirmButtonText: 'Ok',
            confirmButtonColor: '#7cca31',
          })
          this.isLoading = false;
          this.buttonMsg = "Place Order";
        },
          (err: HttpErrorResponse) => {
            this.isLoading = false;
            Swal.fire({
              title: 'Error!',
              text: 'Unable to place order. Make sure you are connected to the internet',
              icon: 'warning',
              confirmButtonText: 'Ok got it!',
              confirmButtonColor: '#7cca31',
            })
            this.buttonMsg = "Place Order";
          });
    }
  }

  private formatQuantity(item: CartItem): string {
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

  itemTotal(item: CartItem): number {
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
