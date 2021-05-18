import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./modules/search/search.module').then(m => m.SearchModule) },
  { path: 'items', loadChildren: () => import('./modules/products/products.module').then(m => m.ProductsModule) },
  { path: 'items/:id', loadChildren: () => import('./modules/product/product.module').then(m => m.ProductModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
