import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StockItemComponent } from './myapps/stock-item/stock-item.component';
import { StockDetailsComponent } from './myapps/stock-details/stock-details.component';

@NgModule({
  declarations: [
    AppComponent,
    StockItemComponent,
    StockDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
