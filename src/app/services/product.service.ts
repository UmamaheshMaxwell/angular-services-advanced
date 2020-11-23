import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  public getProducts(){
    let products:Product[];

    products = [
      new Product("PROD123", "Laptop", 50000 ),
      new Product("PROD124", "Ipad", 10000),
      new Product("PROD125", "HardDisk", 25000)
    ]
    return products;
  }
}
