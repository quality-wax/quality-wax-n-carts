import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { BrandProductsComponent } from './components/brand-products/brand-products.component';
import { BrandComponent } from './components/brand/brand.component';
import { CartComponent } from './components/cart/cart.component';
import { CategoryComponent } from './components/category/category.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { ProductsComponent } from './components/products/products.component';
import { SearchComponent } from './components/search/search.component';
import { TemporalComponent } from './components/temporal/temporal.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  { path: 'about', component: AboutComponent, data: { title: 'About' } },
  { path: 'contact', component: ContactComponent, data: { title: 'Contact' } },
  { path: 'cart', component: CartComponent, data: { title: 'Cart' } },
  {
    path: 'checkout',
    component: CheckoutComponent,
    data: { title: 'Checkout' },
  },
  { path: 'shop/products', redirectTo: 'shop/products/page/1' },
  { path: 'shop/brand/:id', component: BrandComponent },
  { path: 'shop/brand/raw_garden/:id', component: TemporalComponent },
  {
    path: 'shop/brand/:brand/products/page/:page',
    component: BrandProductsComponent,
    data: { title: 'Brand Products' },
  },
  {
    path: 'shop/brand/raw_garden/:brand/products/page/:page',
    component: TemporalComponent,
    data: { title: 'Brand Products' },
  },
  {
    path: 'shop/brand/:brand/products',
    redirectTo: 'shop/brand/:brand/products/page/1',
  },
  {
    path: 'shop/brand/raw_garden/:brand/products',
    redirectTo: 'shop/brand/raw_garden/:brand/products/page/1',
  },
  {
    path: 'shop/products',
    component: ProductsComponent,
    data: { title: 'Products' },
  },
  {
    path: 'shop/products/page/:page',
    component: ProductsComponent,
    data: { title: 'Products' },
  },
  { path: 'shop/brand/:brand/product/:id', component: ProductComponent },
  {
    path: 'shop/category/:id/page/:page',
    component: CategoryComponent,
    data: { title: 'Category Products' },
  },
  { path: 'shop/category/:id', redirectTo: 'shop/category/:id/page/1' },
  {
    path: 'shop/search/:id/page/:page',
    component: SearchComponent,
    data: { title: 'Search Result' },
  },
  { path: 'shop/search/:id', redirectTo: 'shop/search/:id/page/1' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
