import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  products: Product[] = new Array()
  id: string;
  maxProducts: number = 9;
  numberPages: number = 1;
  currentPage: number = 1;
  private pathToAssets: string = "../../assets/";


  constructor(private productService: ProductService, private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe(params => {
      this.id = params["id"]
      let page: number = params["page"];
      this.currentPage = page;
      let allProducts = this.productService.search(this.id);
      this.numberPages = Math.ceil(allProducts.length / this.maxProducts)
      if (this.currentPage < 1 || this.currentPage > this.numberPages) {
        this.router.navigate(["/"]);
      }
      this.products = this.productService.slice(allProducts, ((this.currentPage - 1) * this.maxProducts), this.currentPage * this.maxProducts)
    })
  }

  ngOnInit() {
  }

  getPagesArray() {
    let pages = this.numberPages
    return Array(pages).fill(1).map((x, i) => i + 1)
  }

  printPrice(price: number) {
    var price_parts = price.toString().split(".");
    price_parts[0] = price_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return price_parts.join(".");
  }
}
