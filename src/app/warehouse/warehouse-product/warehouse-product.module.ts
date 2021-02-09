import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WarehouseProductPageRoutingModule } from './warehouse-product-routing.module';

import { WarehouseProductPage } from './warehouse-product.page';
import { ExpandableModule } from 'src/app/component/expandable/expandable.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExpandableModule,
    WarehouseProductPageRoutingModule
  ],
  declarations: [WarehouseProductPage]
})
export class WarehouseProductPageModule {}
