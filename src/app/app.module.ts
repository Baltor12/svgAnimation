import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MdButtonModule,MdButtonToggleModule,MdRadioModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NgZoneDemoComponent } from './ng-zone-demo/ng-zone-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    NgZoneDemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MdRadioModule,
    MdButtonModule,
    MdMenuModule,
    MdCardModule,
    MdToolbarModule,
    MdIconModule,
    MdButtonToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
