import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ManageProductsPage } from './manage-products.page';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ExpandableModule } from 'src/app/component/expandable/expandable.module';

const routes: Routes = [
  {
    path: '',
    component: ManageProductsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ExpandableModule,
    RouterModule.forChild(routes),
    FontAwesomeModule
    
  ],
  declarations: [ManageProductsPage]
})
export class ManageProductsPageModule {}
