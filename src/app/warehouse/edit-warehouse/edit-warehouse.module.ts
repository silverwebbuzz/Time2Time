import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditWarehousePageRoutingModule } from './edit-warehouse-routing.module';

import { EditWarehousePage } from './edit-warehouse.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    EditWarehousePageRoutingModule
  ],
  declarations: [EditWarehousePage]
})
export class EditWarehousePageModule {}
