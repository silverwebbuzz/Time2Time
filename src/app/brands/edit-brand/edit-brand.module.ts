import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditBrandPageRoutingModule } from './edit-brand-routing.module';

import { EditBrandPage } from './edit-brand.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    EditBrandPageRoutingModule
  ],
  declarations: [EditBrandPage]
})
export class EditBrandPageModule {}
