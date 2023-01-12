import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderModule } from './components/header/header.module';
import { ProductsListModule } from './modules/products-list/products-list.module';
import { SidenavModule } from './components/sidenav/sidenav.module';
import { MatListModule } from '@angular/material/list';
import { PopupHostModule } from './shared/popup/popup-host/popup-host.module';
import { InsertShadowModule } from './shared/insert-shadow/insert-shadow.module';
import { ProductsStoreService } from './shared/products/products-store.service';
import { ProductsApiService } from './shared/products/products-api.service';
import { BASE_URL } from './shared/base-url/base-url.token';
import { baseUrl } from './shared/base-url/base-url.const';

const userUiToken = {};

const userToken = {};

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
		InsertShadowModule,
	],
	providers: [
		ProductsStoreService,
		ProductsApiService,
		{
			provide: BASE_URL,
			useValue: baseUrl,
		},
		// {
		// 	provide: ProductsStoreService, // токен
		// 	useClass: ProductsStoreService, // класс по которому будет создаваться подключаемый инстанс
		// },
		// {
		// 	provide: 'ProductsStoreService', // токен - псевдоним
		// 	useExisting: ProductsStoreService, // существующий токен
		// },
		// {
		// 	provide: 'value', // токен
		// 	useValue: 500,
		// },
		// {
		// 	provide: 'second', // токен - псевдоним
		// 	useExisting: 'value', // существующий токен
		// },
		// {
		// 	provide: ProductsStoreService,
		// 	useFactory: () => new ProductsStoreService(),
		// },
		// {
		// 	provide: 'ProductsStoreService',
		// 	useFactory: (productsStoreService: ProductsStoreService) => productsStoreService,
		// 	deps: [ProductsStoreService]
		// },
		// {
		// 	provide: 'value',
		// 	useFactory: () => 500,
		// },
		// {
		// 	provide: 'second',
		// 	useFactory: (value: number) => value,
		// 	deps: ['value']
		// },
		// {
		// 	provide: 'multi',
		// 	useValue: 1,
		// 	multi: true,
		// },
		// {
		// 	provide: 'multi',
		// 	useValue: 2,
		// 	multi: true,
		// },
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
