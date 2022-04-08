import { Component, OnInit } from '@angular/core';
import { ProductService } from './products.service';
import { Product } from '../model/product.model';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts() {
    this.productService.getAllProducts().subscribe((products) => {
      console.log(products);
      this.products = products;
    });
  }
}
