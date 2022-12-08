import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PropertyTag } from 'src/app/models/api/propertyTag.model';
import { CategoriesMap, Brand } from 'src/app/models/brand';
import { Item } from 'src/app/models/item';
import { MetaTag } from 'src/app/models/metaTag';
import { UNITS, Price } from 'src/app/models/price';
import { Product } from 'src/app/models/product';
import { Quantity } from 'src/app/models/quantity';
import { Seo } from '../../models/api/seo.model';
import { BrandService } from 'src/app/services/brand.service';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';
import { SEOService } from 'src/app/services/seo.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product: Product = new Product();
  products: Product[] = [];
  units = UNITS;
  categories = CategoriesMap
  chosenUnit: string = UNITS[0].name;
  quant: number = 1;
  tags = new Array()
  properties = new Array()
  seo = new Seo()
  keyUp = ""
  brand: Brand = new Brand()
  schema;
  constructor(private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
    private cartService: CartService,
    private seoService: SEOService,
    private brandService: BrandService) {

  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let id: string = params["id"];
      let brandId: string = params["brand"];
      this.product = this.productService.find(id, brandId)
      this.chosenUnit = this.product.prices[0].unit;
      this.products = this.productService.findRandomByBrandAndExclude(this.product.brandId, 4, id);
      if (!this.product) {
        this.router.navigate(["/404"]);
      }
    })
    this.seo.title = "Buy " + this.product.name + " online"
    this.seo.description = this.product.description1.substr(0, 160)
    this.tags = [
      {
        name: "twitter:title", content: "Buy " + this.product.name + " online"
      } as MetaTag,
      {
        name: "twitter:description", content: this.product.description1.substr(0, 170)
      } as MetaTag,
      {
        name: "twitter:image", content: "https://www.qualitywaxandcarts.com/" + this.product.photo
      } as MetaTag,
      {
        name: "twitter:label1", content: "Price"
      } as MetaTag,
      {
        name: "twitter:data1", content: "$" + this.product.prices[0].amount
      } as MetaTag,
      {
        name: "twitter:card", content: "Product"
      } as MetaTag,
      {
        name: "twitter:creator", content: "@qualitywaxandcarts"
      } as MetaTag,
    ]

    this.properties = [
      {
        property: "og:title", content: "Buy " + this.product.name + " online"
      } as PropertyTag,
      {
        property: "og:locale", content: "en_US"
      } as PropertyTag,
      {
        property: "og:image", content: "https://www.qualitywaxandcarts.com/" + this.product.photo
      } as PropertyTag,
      {
        property: "og:description", content: this.product.description1.substr(0, 160)
      } as PropertyTag,
      {
        property: "og:price:amount", content: this.product.prices[0].amount.toString()
      } as PropertyTag,
      {
        property: "og:price:currency", content: "USD"
      } as PropertyTag,
      {
        property: "og:site_name", content: "Quality Wax and Carts"
      } as PropertyTag,
      {
        property: "og:type", content: "product"
      } as PropertyTag,
    ]

    this.seo.propertyTags = this.properties
    this.seo.metaTags = this.tags
    this.seoService.addTags(this.seo)
    this.brand = this.brandService.findBrandById(this.product.brandId)
    this.schema = {
      "@context": "http://schema.org",
      "@type": "Product",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5",
        "reviewCount": this.brand.comments.length.toString()
      },
      "description": this.product.description1,
      "name": this.product.name,
      "brand": {
        "@type": "Thing",
        "name": this.brand.name
      },
      "image": "https://www.qualitywaxandcarts.com/" + this.product.photo,
      "sku": "00241" + this.productService.getProductIndex(this.product),
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

  }

  addToCart() {
    if (this.keyUp)
      this.quant = parseFloat(this.keyUp);
    if (this.chosenUnit && Number.isFinite(this.quant) && !(this.quant <= 0)) {
      let item: Item = new Item();
      let quant: Quantity = new Quantity();
      quant.quantity = this.quant;
      quant.unit = this.chosenUnit;
      item.product = this.product;
      item.quantity = quant;
      this.cartService.add(item);
    }
    else {
      this.quant = 1;
      Swal.fire({
        title: 'Bad Quantity',
        text: 'Please enter a non zero quantity value to proceed',
        icon: 'warning',
        confirmButtonText: 'Ok got it!',
      })
    }
  }

  addQuant() {
    if (this.keyUp) {
      this.quant = parseFloat(this.keyUp);
      this.keyUp = "";
    }
    this.quant += 1;
  }

  reduceQuant() {
    if (this.keyUp) {
      this.quant = parseFloat(this.keyUp);
      this.keyUp = "";
    }
    if ((this.quant - 1) <= 0)
      this.quant = 0;
    else
      this.quant -= 1;
  }

  onQuantityChange(event) {
    this.keyUp = event.target.value;
  }

  getCategory(id: string) {
    return this.categories.get(id)
  }

  getBrand(id: string) {
    return this.brandService.findBrandById(id)
  }

  hasManyOptions(product: Product) {
    console.log(product.prices.length)
    return product.prices.length > 4 ? true : false
  }

  getFourPrices(product: Product): Price[] {
    let prices: Price[] = new Array()
    for (let i = 0; i < 4; i++) {
      prices.push(product.prices[i])
    }
    return prices
  }

  printPrice(price: number) {
    var price_parts = price.toString().split(".");
    price_parts[0] = price_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return price_parts.join(".");
  }
}
