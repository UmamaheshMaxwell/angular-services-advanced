import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-customer-one',
  templateUrl: './customer-one.component.html',
  styleUrls: ['./customer-one.component.css']
})
export class CustomerOneComponent {

  products: Product[];

  constructor(private productService: ProductService) { }

  getProducts(){
    this.products = this.productService.getProducts();
    console.log(this.products)
  }

}
