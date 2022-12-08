import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Brand } from 'src/app/models/brand';
import { Product } from 'src/app/models/product';
import { Seo } from 'src/app/models/seo';
import { BrandService } from 'src/app/services/brand.service';
import { ProductService } from 'src/app/services/product.service';
import { SEOService } from 'src/app/services/seo.service';

@Component({
  selector: 'app-temporal',
  templateUrl: './temporal.component.html',
  styleUrls: ['./temporal.component.css']
})
export class TemporalComponent implements OnInit {

  products: Product[] = new Array()
  brand: Brand
  paginate: string = ''
  maxProducts: number = 12
  numberPages: number = 1
  currentPage: number = 1
  seo = new Seo()
  tags = new Array()
  properties = new Array()
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    private brandService: BrandService,
    private seoService: SEOService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      let page: number = params['page']
      let brandId: string = params['brand']
      this.brand = this.brandService.findBrandById('raw_garden')
      if (this.currentPage < 1 || this.currentPage > this.numberPages) {
        this.router.navigate(['/'])
      }
      this.currentPage = page
      let allProducts: Product[] = []
      if (brandId == 'live_resin') {
        this.paginate = 'live_resin'
        allProducts = this.productService.findByType('live_resin')
      } else if (brandId == 'live_sauce') {
        this.paginate = 'live_sauce'
        allProducts = this.productService.findByType('live_sauce')
      } else {
        allProducts = this.productService.findByBrand(brandId)
      }
      console.log(allProducts)
      this.numberPages = Math.ceil(allProducts.length / this.maxProducts)
      this.products = this.productService.slice(
        allProducts,
        (this.currentPage - 1) * this.maxProducts,
        this.currentPage * this.maxProducts,
      )
      // this.seo.title = 'Buy ' + 'Raw Garden Live Refined Products online'
      // this.seo.description = this.brand.description.substr(0, 160)
      // this.tags = [
      //   {
      //     name: 'twitter:title',
      //     content:
      //       'Buy ' + this.brand.name + ' Products at Quality Wax and Carts',
      //   } as MetaTag,
      //   {
      //     name: 'twitter:description',
      //     content: this.brand.description.substr(0, 160),
      //   } as MetaTag,
      //   {
      //     name: 'twitter:image',
      //     content: 'https://www.qualitywaxandcarts.com/' + this.brand.photo,
      //   } as MetaTag,
      //   {
      //     name: 'twitter:label1',
      //     content: 'Buy genuine' + this.brand.name,
      //   } as MetaTag,
      //   {
      //     name: 'twitter:data1',
      //     content: 'Free shipping available',
      //   } as MetaTag,
      //   {
      //     name: 'twitter:card',
      //     content: this.brand.name,
      //   } as MetaTag,
      //   {
      //     name: 'twitter:creator',
      //     content: '@qualitywaxandcarts',
      //   } as MetaTag,
      // ]

      // this.properties = [
      //   {
      //     property: 'og:title',
      //     content:
      //       'Buy ' + this.brand.name + ' Products at Quality Wax and Carts',
      //   } as PropertyTag,
      //   {
      //     property: 'og:locale',
      //     content: 'en_US',
      //   } as PropertyTag,
      //   {
      //     property: 'og:image',
      //     content: 'https://www.qualitywaxandcarts.com/' + this.brand.photo,
      //   } as PropertyTag,
      //   {
      //     property: 'og:description',
      //     content: this.brand.description.substr(0, 160),
      //   } as PropertyTag,
      //   {
      //     property: 'og:site_name',
      //     content: 'Quality Wax and Carts',
      //   } as PropertyTag,
      //   {
      //     property: 'og:type',
      //     content: 'website',
      //   } as PropertyTag,
      // ]

      // this.seo.propertyTags = this.properties
      // this.seo.metaTags = this.tags
      // this.seoService.addTags(this.seo)
    })
  }

  getPagesArray() {
    let pages = this.numberPages
    return Array(pages)
      .fill(1)
      .map((x, i) => i + 1)
  }

  getBrand(id: string) {
    return this.brandService.findBrandById(id)
  }

  printPrice(price: number) {
    var price_parts = price.toString().split('.')
    price_parts[0] = price_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    return price_parts.join('.')
  }
}
