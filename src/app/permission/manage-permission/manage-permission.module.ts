import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ManagePermissionPage } from './manage-permission.page';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const routes: Routes = [
  {
    path: '',
    component: ManagePermissionPage
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
  declarations: [ManagePermissionPage]
})
export class ManagePermissionPageModule {}
