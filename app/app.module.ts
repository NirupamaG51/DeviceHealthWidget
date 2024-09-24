import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DeviceIssuesTableComponent } from './device-issues-table/device-issues-table.component';

@NgModule({
  declarations: [
    AppComponent,
    DeviceIssuesTableComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
