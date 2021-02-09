import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WarehouseProductPage } from './warehouse-product.page';

const routes: Routes = [
  {
    path: '',
    component: WarehouseProductPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WarehouseProductPageRoutingModule {}
