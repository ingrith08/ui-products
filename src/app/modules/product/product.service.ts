import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { mergeMap, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url =  `${environment.backendURL}/api/items/:id`;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute
  ) { }

  getProduct(id: string) {
    return this.http.get<Product>(this.url.replace(':id', id));
  }
}

interface Product {
  author: {
    name: string,
    lastname: string
  },
  item: {
    condition: string
    description: string
    free_shipping: Boolean
    id: string
    picture: string
    price: {
      currency: string,
      amount: number,
      decimals: number
    }
    sold_quantity: number
    title: string
  }
}

