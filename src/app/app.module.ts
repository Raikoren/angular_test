import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MedicShopComponent } from './medic-shop/medic-shop.component';
import { MedicViewComponent } from './medic-view/medic-view.component';

@NgModule({
  declarations: [
    AppComponent,
    MedicShopComponent,
    MedicViewComponent
  ],
  imports: [
    BrowserModule,
	AppRoutingModule,
	FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
