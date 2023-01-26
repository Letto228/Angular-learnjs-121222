import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderModule } from './components/header/header.module';
import { SidenavModule } from './components/sidenav/sidenav.module';
import { MatListModule } from '@angular/material/list';
import { PopupHostModule } from './shared/popup/popup-host/popup-host.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BaseUrlInterceptor } from './shared/base-url/base-url.interceptor';
import { NotFoundModule } from './modules/not-found/not-found.module';
import { StoreModule } from '@ngrx/store';
import { storeReducer } from './shared/store/reducer';
import { storeEffects } from './shared/store/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

// const isProd = false;
// const devtoolsInstruments = [];

// if (!isProd) {
// 	devtoolsInstruments.push(StoreDevtoolsModule.instrument());
// }

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		HeaderModule,
		SidenavModule,
		MatListModule,
		PopupHostModule,
		HttpClientModule,
		NotFoundModule,
		StoreModule.forRoot(storeReducer),
		StoreDevtoolsModule.instrument(),
		EffectsModule.forRoot(storeEffects),
		// ...devtoolsInstruments,
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
