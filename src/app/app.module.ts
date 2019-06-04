import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GaugeChartModule } from 'angular-gauge-chart';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GaugeChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
