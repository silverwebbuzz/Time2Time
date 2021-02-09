import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { StockReportPage } from './stock-report.page';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ExpandableModule } from 'src/app/component/expandable/expandable.module';

const routes: Routes = [
  {
    path: '',
    component: StockReportPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExpandableModule,
    FontAwesomeModule,
    RouterModule.forChild(routes)
  ],
  declarations: [StockReportPage]
})
export class StockReportPageModule {}
