import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './modules/not-found/not-found.component';

const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		redirectTo: '/products-list',
	},
	{
		path: 'products-list',
		loadChildren: () => import('./modules/products-list/products-list.module').then(m => m.ProductsListModule),
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
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
