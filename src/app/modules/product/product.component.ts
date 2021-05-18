import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from './product.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass']
})
export class ProductComponent implements OnInit {
  product: any;
  loading = true;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
    ) {
    const id = this.route.snapshot.params.id;
    productService.getProduct(id).pipe(
      finalize(() => this.loading= false)
    )
    .subscribe((product) => {
      this.product = product?.item
    }, (error) => {
      console.log(error);
    });
   }

  ngOnInit(): void {
  }

}
