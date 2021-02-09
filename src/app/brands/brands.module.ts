import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BrandsPage } from './brands.page';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const routes: Routes = [
  {
    path: '',
    component: BrandsPage
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FontAwesomeModule,
    RouterModule.forChild(routes),
  ],
  declarations: [BrandsPage]
})
export class BrandsPageModule {}
