import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AddProductComponent } from 'src/app/component/add-product/add-product.component';

import { IonicModule } from '@ionic/angular';

import { AddOrderPage } from './add-order.page';
import { ExpandableModule } from 'src/app/component/expandable/expandable.module';

const routes: Routes = [
  {
    path: '',
    component: AddOrderPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ExpandableModule,
    RouterModule.forChild(routes)
  ],
  providers: [AddProductComponent
   
  ],
  declarations: [AddOrderPage]
})
export class AddOrderPageModule {}
