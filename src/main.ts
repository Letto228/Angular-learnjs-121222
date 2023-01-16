import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

platformBrowserDynamic()
	.bootstrapModule(AppModule)
	.catch(err => console.error(err));
// platformBrowserDynamic()
// 	.bootstrapModule(RootModule)
// 	.catch(err => console.error(err));
// platformBrowserDynamic()
// 	.bootstrapModule(ClientModule)
// 	.catch(err => console.error(err));

// PlatformInjector

// /							|								\

// RootInjector(AppModule)		RootInjector(RootModule)		RootInjector(ClientModule)
