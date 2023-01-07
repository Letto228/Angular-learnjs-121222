import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderModule } from './components/header/header.module';
import { ProductsListModule } from './modules/products-list/products-list.module';
import { SidenavModule } from './components/sidenav/sidenav.module';
import { MatListModule } from '@angular/material/list';
import { PopupHostModule } from './shared/popup/popup-host/popup-host/popup-host.module';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		HeaderModule,
		ProductsListModule,
		SidenavModule,
		MatListModule,
		PopupHostModule,
		MatButtonModule,
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
