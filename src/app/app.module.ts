import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgtUniversalModule } from '@ng-toolkit/universal'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { BrandComponent } from './components/brand/brand.component';
import { BrandProductsComponent } from './components/brand-products/brand-products.component';
import { CartComponent } from './components/cart/cart.component';
import { CategoryComponent } from './components/category/category.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ProductComponent } from './components/product/product.component';
import { ProductsComponent } from './components/products/products.component';
import { SearchComponent } from './components/search/search.component';
import { TemporalComponent } from './components/temporal/temporal.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TransferHttpModule, TransferHttpService } from '@gorniv/ngx-universal';
import { NgxJsonLdModule } from '@ngx-lite/json-ld'
import { TransferHttpCacheModule } from '@nguniversal/common'
import { FormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ApiService } from './services/api.service';
import { BrandService } from './services/brand.service';
import { CartService } from './services/cart.service';
import { APIPostService } from './services/post.service';
import { ProductService } from './services/product.service';
import { ScriptService } from './services/script.service';
import { SEOService } from './services/seo.service';
import { ContactComponent } from './components/contact/contact.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent,
    BrandComponent,
    BrandProductsComponent,
    CartComponent,
    CategoryComponent,
    CheckoutComponent,
    ProductComponent,
    ProductsComponent,
    SearchComponent,
    TemporalComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'app-root' }),
    AppRoutingModule,
    CommonModule,
    NgxJsonLdModule,
    NgtUniversalModule,
    TransferHttpCacheModule,
    TransferHttpModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [
    ProductService,
    BrandService,
    CartService,
    ApiService,
    ScriptService,
    SEOService,
    APIPostService,
    TransferHttpService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
