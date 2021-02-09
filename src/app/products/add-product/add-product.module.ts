import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AddProductPage } from './add-product.page';
import { QuillEditorModule } from 'ngx-quill-editor';

const routes: Routes = [
  {
    path: '',
    component: AddProductPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    QuillEditorModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AddProductPage]
})
export class AddProductPageModule {}
