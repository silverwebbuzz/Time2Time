import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BrandsProductPageRoutingModule } from './brands-product-routing.module';

import { BrandsProductPage } from './brands-product.page';

import { ExpandableModule } from 'src/app/component/expandable/expandable.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExpandableModule,
    BrandsProductPageRoutingModule
  ],
  declarations: [BrandsProductPage]
})
export class BrandsProductPageModule {}
