import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productNames: string[] = ['Product 1', 'Product 2', 'Product 3'];

  constructor() { }

  getProductNames(): string[] {
    return this.productNames;
  }
}
