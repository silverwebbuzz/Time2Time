import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditProductPageRoutingModule } from './edit-product-routing.module';

import { EditProductPage } from './edit-product.page';
import { QuillEditorModule } from 'ngx-quill-editor';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    QuillEditorModule,
    EditProductPageRoutingModule
  ],
  declarations: [EditProductPage]
})
export class EditProductPageModule {}
