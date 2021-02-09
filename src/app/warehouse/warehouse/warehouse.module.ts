import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { WarehousePage } from './warehouse.page';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const routes: Routes = [
  {
    path: '',
    component: WarehousePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FontAwesomeModule,
    RouterModule.forChild(routes)
  ],
  declarations: [WarehousePage]
})
export class WarehousePageModule {}
