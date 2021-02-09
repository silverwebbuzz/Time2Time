import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ManageOrdersPage } from './manage-orders.page';
import { ExpandableModule } from 'src/app/component/expandable/expandable.module';

const routes: Routes = [
  {
    path: '',
    component: ManageOrdersPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExpandableModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ManageOrdersPage]
})
export class ManageOrdersPageModule {}
