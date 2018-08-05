import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ItemFormComponent } from './input-form/input-form.component';
import {FormsModule} from '@angular/forms';
import { ItemRowComponent } from './item-row/item-row.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemFormComponent,
    ItemRowComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
