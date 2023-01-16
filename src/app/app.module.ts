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
import { ProductsStoreService } from './shared/products/products-store.service';
import { ProductsApiService } from './shared/products/products-api.service';
import { BASE_URL } from './shared/base-url/base-url.token';
import { baseUrl } from './shared/base-url/base-url.const';
import { ProductModule } from './modules/product/product.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BaseUrlInterceptor } from './shared/base-url/base-url.interceptor';

// NullInjector - конец

// |

// PlatformInjector

// |

// RootInjector(1)/AppModuleInjector(1)

// |												|

// |												HeaderModuleInjector(lazy)

// |												|

// ElementInjector(AppComponentElementInjector)

// |												|

// SidenavElementInjector							HeaderElementInjector

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
		ProductModule,
		HttpClientModule,
	],
	providers: [
		// ProductsStoreService,
		// ProductsApiService,
		// {
		// 	provide: ProductsStoreService,
		// 	useValue: {},
		// },
		{
			provide: 'name',
			useValue: 'AppModuleInjector',
		},
		// {
		// 	provide: BASE_URL,
		// 	useValue: baseUrl,
		// },
		{
			provide: HTTP_INTERCEPTORS,
			multi: true,
			useClass: BaseUrlInterceptor,
		},
		// {
		// 	provide: HTTP_INTERCEPTORS,
		// 	multi: true,
		// 	useClass: AuthInterceptor,
		// },
		// {
		// 	provide: HTTP_INTERCEPTORS,
		// 	multi: true,
		// 	useClass: ErrorInterceptor,
		// },
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
// request => BaseUrlInterceptor(request) => ErrorInterceptor(BaseUrlInterceptor(request)) => AuthInterceptor(ErrorInterceptor(BaseUrlInterceptor(request)))
