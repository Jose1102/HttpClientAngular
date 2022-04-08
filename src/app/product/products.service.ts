import { Injectable } from '@angular/core';
import { Product } from '../model/product.model';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getAllProducts() {
    return this.http.get<Product[]>(
      'https://platzi-store.herokuapp.com/products/'
    );
  }
}
