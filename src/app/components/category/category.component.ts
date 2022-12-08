import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  products: Product[] = new Array()
  maxProducts: number = 9
  numberPages: number = 1
  currentPage: number = 1

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      let page: number = params['page']
      let brandId: string = params['id']
      this.currentPage = page
      let allProducts: Product[] = []
      if (brandId == 'live_resin') {
        allProducts = this.productService.findByType('live_resin')
      } else if (brandId == 'live_sauce') {
        allProducts = this.productService.findByType('live_sauce')
      } else {
        allProducts = this.productService.findByBrand(brandId)
      }
      this.numberPages = Math.ceil(allProducts.length / this.maxProducts)
      if (this.currentPage < 1 || this.currentPage > this.numberPages) {
        this.router.navigate(['/'])
      }
      this.products = this.productService.slice(
        allProducts,
        (this.currentPage - 1) * this.maxProducts,
        this.currentPage * this.maxProducts,
      )
    })
  }

  getPagesArray() {
    let pages = this.numberPages
    return Array(pages)
      .fill(1)
      .map((x, i) => i + 1)
  }

  printPrice(price: number) {
    var price_parts = price.toString().split('.')
    price_parts[0] = price_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    return price_parts.join('.')
  }
}
