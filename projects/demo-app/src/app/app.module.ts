import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { RouteReuseStrategy } from '@angular/router';
import { NgxRouteReuse } from 'ngx-route-reuse';
import { Page3Component } from './page3/page3.component';

@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    Page2Component,
    Page3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {provide: RouteReuseStrategy, useClass: NgxRouteReuse}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
