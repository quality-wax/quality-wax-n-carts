import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/api/contact';
import { Product } from 'src/app/models/product';
import { ApiService } from 'src/app/services/api.service';
import { ProductService } from 'src/app/services/product.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contact: Contact = new Contact();
  isLoading = false;
  buttonMsg = "Send Message";
  products: Product[] = new Array();
  constructor(private apiService: ApiService, private productService: ProductService) { }

  ngOnInit() {
    this.products = this.productService.findRandom(6);
  }

  submit() {
    this.buttonMsg = "Loading..."
    this.apiService.contact(this.contact)
      .subscribe((data: any) => {
        this.isLoading = true;
        Swal.fire({
          title: 'Thanks!',
          text: 'Thank you! You message has been received. We will contact you as soon as possible',
          icon: 'success',
          confirmButtonText: 'Ok',
          confirmButtonColor: '#7cca31'
        })
        this.contact = new Contact();
        this.isLoading = false;
        this.buttonMsg = "Send Message";
      },
        (err: HttpErrorResponse) => {
          this.isLoading = false;
          Swal.fire({
            title: 'Error!',
            text: 'Unable to send message. Make sure you are connected to the internet',
            icon: 'warning',
            confirmButtonText: 'Ok got it!',
            confirmButtonColor: '#7cca31'
          })
          this.buttonMsg = "Send Message";
        });

  }
}
