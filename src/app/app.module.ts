import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header/header.component';
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";

@NgModule({
	declarations: [AppComponent, HeaderComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, MatIconModule, MatToolbarModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
