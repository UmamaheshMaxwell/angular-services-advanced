import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-customer-two',
  templateUrl: './customer-two.component.html',
  styleUrls: ['./customer-two.component.css']
})
export class CustomerTwoComponent {

  products: Product[];

  constructor(private productService: ProductService) { }

  getProducts(){
    this.products = this.productService.getProducts();
  }

}
