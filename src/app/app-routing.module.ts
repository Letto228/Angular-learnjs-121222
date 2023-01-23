import { NgModule } from '@angular/core';
import { NoPreloading, PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './modules/not-found/not-found.component';
import { CustomPreloading } from './shared/preloading-strategy/custom-preloading';

const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		redirectTo: '/products-list',
	},
	{
		path: 'products-list',
		loadChildren: () => import('./modules/products-list/products-list.module').then(m => m.ProductsListModule),
		data: {
			preload: true,
		},
	},
	{
		path: 'product',
		loadChildren: () => import('./modules/product/product.module').then(m => m.ProductModule),
	},
	{
		path: '**',
		component: NotFoundComponent,
	},
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, {
			preloadingStrategy: CustomPreloading,
		}),
	],
	exports: [RouterModule],
})
export class AppRoutingModule {}
