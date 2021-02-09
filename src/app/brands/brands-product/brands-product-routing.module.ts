import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BrandsProductPage } from './brands-product.page';

const routes: Routes = [
  {
    path: '',
    component: BrandsProductPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BrandsProductPageRoutingModule {}
