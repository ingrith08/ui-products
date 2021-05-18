import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Products, ProductsService } from './products.service';
import {finalize, mergeMap, tap} from 'rxjs/operators';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass']
})
export class ProductsComponent implements OnInit {
  items: any;
  loading = true;
  text = '';

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.route.queryParams.pipe(
      tap(params => this.text = params.search),
      mergeMap(() => this.productsService.getProducts(this.text)),
    ).subscribe((response) => {
        this.loading = false;
        this.items = response.items;
      }, (error) => {
        this.loading = false;
        console.log(error);
      })
  }

}
