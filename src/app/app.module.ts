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
		{
			provide: HTTP_INTERCEPTORS,
			multi: true,
			useClass: BaseUrlInterceptor,
		},
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
