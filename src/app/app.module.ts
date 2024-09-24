import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DeviceIssuesTableComponent } from './device-issues-table/device-issues-table.component';
// import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    DeviceIssuesTableComponent,
    // TestComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
