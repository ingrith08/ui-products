import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private url =  `${environment.backendURL}/api/items`;

  constructor(private http: HttpClient) { }

  getProducts(text: string) {
    if (!text) { text = ''}
    return this.http.get<Products>(this.url, {params: {q: text}})
  }
}

export interface Products {
  author: {
    name: string,
    lastname: string
  },
  categories: Array<string>,
  items: Array<Item>
}

interface Item {
  id: string,
  title: string,
  price: {
    currency: string,
    amount: Number,
    decimals: Number
  },
  picture: string,
  condition: string,
  free_shipping: boolean
}
