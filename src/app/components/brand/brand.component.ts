import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { PropertyTag } from 'src/app/models/api/propertyTag.model';
import { CategoriesMap, Brand } from 'src/app/models/brand';
import { MetaTag } from 'src/app/models/metaTag';
import { Product } from 'src/app/models/product';
import { Seo } from '../../models/api/seo.model';
import { BrandService } from 'src/app/services/brand.service';
import { ProductService } from 'src/app/services/product.service';
import { SEOService } from 'src/app/services/seo.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  products: Product[] = new Array();
  product: Product
  trending: Product[] = new Array()
  bestSellers: Product[] = new Array()
  categories = CategoriesMap
  id: string;
  brand: Brand = new Brand()
  brands: Brand[] = new Array()
  seo = new Seo()
  tags = new Array()
  properties = new Array()
  schema: any

  constructor(private router: Router, private productService: ProductService, private route: ActivatedRoute, private brandService: BrandService, private titleService: Title, private seoService: SEOService
  ) {

  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params["id"];
      this.brand = this.brandService.findBrandById(this.id)
      if (!this.brand) {
        this.router.navigate(["/"]);
      }
      this.brands = this.brandService.getBrands()
      this.product = this.productService.findByBrand(this.id)[0]
      this.products = this.productService.findRandomByBrand(this.id, 4)
      this.trending = this.productService.findRandomByBrand(this.id, 6)
      this.bestSellers = this.productService.findRandomByBrand(this.id, 3)
      this.seo.title = "About " + this.brand.name + " | Buy " + this.brand.name + " products"
      this.seo.description = this.brand.description
      this.tags = [
        {
          name: "twitter:title", content: "About " + this.brand.name + " | Buy " + this.brand.name + " products"
        } as MetaTag,
        {
          name: "twitter:description", content: this.brand.description
        } as MetaTag,
        {
          name: "twitter:image", content: "https://www.qualitywaxandcarts.com/" + this.brand.photo
        } as MetaTag,
        {
          name: "twitter:label1", content: "About " + this.brand.name + " | Buy " + this.brand.name + " products"
        } as MetaTag,
        {
          name: "twitter:data1", content: "Free shipping available"
        } as MetaTag,
        {
          name: "twitter:card", content: this.brand.name
        } as MetaTag,
        {
          name: "twitter:creator", content: "@qualitywaxandcarts"
        } as MetaTag,
      ]

      this.properties = [
        {
          property: "og:title", content: "About " + this.brand.name + " | Buy " + this.brand.name + " products"
        } as PropertyTag,
        {
          property: "og:locale", content: "en_US"
        } as PropertyTag,
        {
          property: "og:image", content: "https://www.qualitywaxandcarts.com/" + this.brand.photo
        } as PropertyTag,
        {
          property: "og:description", content: this.brand.description
        } as PropertyTag,
        {
          property: "og:site_name", content: "420 Oil Carts"
        } as PropertyTag,
        {
          property: "og:type", content: "website"
        } as PropertyTag,
      ]

      this.seo.propertyTags = this.properties
      this.seo.metaTags = this.tags
      this.seoService.addTags(this.seo)

      this.schema = {
        "@context": "http://schema.org",
        "@type": "Product",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "5",
          "reviewCount": this.brand.comments.length.toString()
        },
        "description": this.brand.fullDescription,
        "name": this.brand.name,
        "brand": {
          "@type": "Thing",
          "name": this.brand.name
        },
        "image": "https://www.qualitywaxandcarts.com/" + this.brand.photo,
        "sku": "00243" + this.productService.getProductIndex(this.product),
        "offers": {
          "@type": "Offer",
          "url": this.router.url,
          "priceValidUntil": "2020-12-31",
          "availability": "http://schema.org/InStock",
          "price": this.product.prices[0].amount.toString(),
          "priceCurrency": "USD"
        },
        "review": [
          {
            "@type": "Review",
            "author": "Anonymous",
            "description": this.brand.comments[0],
            "reviewRating": {
              "@type": "Rating",
              "bestRating": "5",
              "ratingValue": "5",
              "worstRating": "1"
            }
          },
          {
            "@type": "Review",
            "author": "Anonymous",
            "description": this.brand.comments[1],
            "reviewRating": {
              "@type": "Rating",
              "bestRating": "5",
              "ratingValue": "5",
              "worstRating": "1"
            }
          }
        ]
      }
    })
  }

  getCategory(id: string) {
    return this.categories.get(id)
  }

  getBrand(id: string) {
    return this.brandService.findBrandById(id)
  }

  printPrice(price: number) {
    var price_parts = price.toString().split(".");
    price_parts[0] = price_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return price_parts.join(".");
  }
}
