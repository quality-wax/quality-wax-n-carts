import { Component } from '@angular/core';
import { PropertyTag } from 'src/app/models/api/propertyTag.model';
import { MetaTag } from 'src/app/models/metaTag';
import { Product } from 'src/app/models/product';
import { Seo } from '../../models/api/seo.model';
import { BrandService } from 'src/app/services/brand.service';
import { ProductService } from 'src/app/services/product.service';
import { SEOService } from 'src/app/services/seo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  products: Product[] = new Array()
  trending: Product[] = new Array()
  seo = new Seo()
  tags = new Array()
  date: Date
  properties = new Array()
  schema: any;
  navigationSchema: any;

  constructor(private productService: ProductService, private brandService: BrandService, private seoService: SEOService) {
    var now = new Date(), y = now.getFullYear(), m = now.getMonth();
    this.date = new Date(y, m + 1, 0);
    console.log(this.date.toUTCString())
  }

  ngOnInit() {
    this.products = this.productService.findRandom(12);
    //this.trending = this.productService.findRandom(8);
    this.seo.title = "Quality Wax and Carts | Buy Cannabis Vape Cartridges & Accessories"
    this.seo.description = "Buy best grade cannabis products such as vape pens, cartridges and Wax online at very affortable prices. "
    this.tags = [
      {
        name: "twitter:title", content: "Quality Wax and Carts | Buy Cannabis Vape Cartridges & Accessories"
      } as MetaTag,
      {
        name: "twitter:description", content: "Buy best grade cannabis products such as strains, vape pens, cartridges and pre rolls online at very affortable prices. "
      } as MetaTag,
      {
        name: "twitter:image", content: "https://www.qualitywaxandcarts.com/assets/images/brands/stiiizy-1.jpeg"
      } as MetaTag,
      {
        name: "twitter:label1", content: "Buy premium products"
      } as MetaTag,
      {
        name: "twitter:data1", content: "Free shipping available"
      } as MetaTag,
      {
        name: "twitter:card", content: "Quality Wax and Carts"
      } as MetaTag,
      {
        name: "twitter:creator", content: "@qualitywaxandcarts"
      } as MetaTag,
    ]

    this.properties = [
      {
        property: "og:title", content: "Quality Wax and Carts | Buy Cannabis Vape Cartridges & Accessories"
      } as PropertyTag,
      {
        property: "og:locale", content: "en_US"
      } as PropertyTag,
      {
        property: "og:image", content: "https://www.qualitywaxandcarts.com/assets/images/brands/stiiizy-1.jpeg"
      } as PropertyTag,
      {
        property: "og:description", content: "Buy best grade cannabis products such as strains, vape pens, cartridges and pre rolls online at very affortable prices. "
      } as PropertyTag,
      {
        property: "og:site_name", content: "Quality Wax and Carts"
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
      "@type": "WebSite",
      "name": "Quality Wax and Carts",
      "url": "https://www.qualitywaxandcarts.com",
      "sameAs": ["https://instagram.com/qualitywaxandcarts", "https://www.pinterest.com/qualitywaxandcarts"],
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://www.qualitywaxandcarts.com/shop/search/{search_term}",
        "query-input": "required name=search_term"
      }
    }

    this.navigationSchema = {
      "@context": "http://schema.org",
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "SiteNavigationElement",
          "position": 1,
          "name": "Muha-Meds Carts",
          "description": "Buy top quality MuhaMeds cartridges from Quality Wax and Carts. Our range of cartridges is one of the largest online, with more than 500 varieties of cartridges.",
          "url": "https://www.qualitywaxandcarts.com/shop/brand/muha-meds/products"
        },
        {
          "@type": "SiteNavigationElement",
          "position": 2,
          "name": "Rove Carts",
          "description": "Buy High quality, high-THC Rove cartridges, soft gels, sublingual sprays and other medical marijuana products from Quality Wax and Carts. Pre-filled THC oil vape cartridges are a convenient and high tech way to get high.",
          "url": "https://www.qualitywaxandcarts.com/shop/brand/rove/products"
        },
        {
          "@type": "SiteNavigationElement",
          "position": 3,
          "name": "Stiiizy LiiL",
          "description": "Buy top quality stiiizy carts and pods from Quality Wax and Carts. A joint is cheap, discreet, disposable, and easily shared among friends but a cart is more convinient. It requires neither the financial investment of a bong nor the time commitment of an edible.",
          "url": "https://www.qualitywaxandcarts.com/shop/brand/stiiizy/products"
        },
        {
          "@type": "SiteNavigationElement",
          "position": 4,
          "name": "About Us",
          "description": "At Quality Wax and Carts, we are focused on providing concentrates, cartridges products and services with the highest levels of customer satisfaction – we will do everything we can to meet your expectations. With a variety of offerings to choose from, we’re sure you’ll be happy working with us.",
          "url": "https://www.qualitywaxandcarts.com/about"
        },
        {
          "@type": "SiteNavigationElement",
          "position": 5,
          "name": "Contact Us",
          "description": "Quality Wax and Carts contact information: 501 Cedar St, Santa Cruz, CA 95060, USA. +0 (000) 000-0000",
          "url": "https://www.qualitywaxandcarts.com/contact"
        }
      ]
    }
  }

  findBrand(id: string): string {
    return this.brandService.findBrandById(id).name
  }

  printPrice(price: number) {
    var price_parts = price.toString().split(".");
    price_parts[0] = price_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return price_parts.join(".");
  }
}
