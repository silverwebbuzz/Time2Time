import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';
import { FilterComponent } from './component/filter/filter.component';
import { QuillEditorModule } from 'ngx-quill-editor';
import { AddProductComponent } from './component/add-product/add-product.component';


@NgModule({
  declarations: [AppComponent, FilterComponent, AddProductComponent],
  entryComponents: [FilterComponent, AddProductComponent],
  imports: [BrowserModule,
    IonicModule.forRoot({mode:'ios'}),
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    HttpClientModule,
    QuillEditorModule,
    IonicStorageModule.forRoot()],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    SocialSharing
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
