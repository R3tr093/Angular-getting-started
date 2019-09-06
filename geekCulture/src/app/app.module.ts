import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DrawComponent } from './draw/draw.component';
import { AppareilComponent } from './appareil/appareil.component';


@NgModule({
  declarations: [
    AppComponent,
    DrawComponent,
    AppareilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
