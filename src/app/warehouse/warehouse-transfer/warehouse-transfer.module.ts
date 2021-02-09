import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { WarehouseTransferPage } from './warehouse-transfer.page';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ExpandableModule } from 'src/app/component/expandable/expandable.module';


const routes: Routes = [
  {
    path: '',
    component: WarehouseTransferPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    FontAwesomeModule,
    ExpandableModule,
    RouterModule.forChild(routes),
  ],
  declarations: [WarehouseTransferPage]
})
export class WarehouseTransferPageModule {}
