import { Injectable } from '@angular/core';
import { Brand, ALLBRANDS, Brands } from '../models/brand';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  private brands: Brand[] = new Array();

  constructor() {
      ALLBRANDS.forEach(b => {
          let brand = new Brand()
          brand.description = b.description
          brand.id = b.id
          brand.name = b.name
          brand.fullDescription = b.fullDescription
          brand.comments = b.comments
          brand.photo = b.photo

          this.brands.push(brand)
      })

      this.brands.sort((a, b) => a.name.localeCompare(b.name))
  }

  getBrands() {
    let brands: Brand[] = new Array()
    this.brands.forEach(brand => {
      if (brand.name != "Wax and Concentrates") {
        brands.push(brand)
      }
    })
      return brands
  }

  findBrandById(id: string) : Brand {
      let i = this.getSelectedIndex(id)
      return i < 0 ? null : this.brands[i]
  }

  private getSelectedIndex(id: string) {
    for (var i = 0; i < this.brands.length; i++) {
      if (this.brands[i].id === id) {
        return i;
      }
    }
    return -1;
  }
}