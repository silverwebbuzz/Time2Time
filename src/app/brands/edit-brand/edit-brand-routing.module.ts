import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditBrandPage } from './edit-brand.page';

const routes: Routes = [
  {
    path: '',
    component: EditBrandPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditBrandPageRoutingModule {}
