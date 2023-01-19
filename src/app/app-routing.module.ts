import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './modules/not-found/not-found.component';
import { DescriptionComponent } from './modules/product/description/description.component';
import { DetailsComponent } from './modules/product/description/details/details.component';
import { ProductComponent } from './modules/product/product.component';
import { TypeComponent } from './modules/product/type/type.component';
import { ProductsListComponent } from './modules/products-list/products-list.component';
import { CanActivateGuard } from './shared/test-guards/can-activate.guard';
import { CanDeactivateGuard } from './shared/test-guards/can-deactivate.guard';
import { CanLoadGuard } from './shared/test-guards/can-load.guard';
import { ProductsResolver } from './shared/test-guards/products.resolver';

// const routes: Routes = [
// 	{
// 		path: '',
// 		pathMatch: 'full',
// 		redirectTo: '/products-list',
// 	},
// 	{
// 		path: 'products-list',
// 		component: ProductsListComponent,
// 	},
// 	{
// 		path: 'product/:id', // ":" - символ обозначающий параметр
// 		component: ProductComponent, // /product/id +
// 		children: [
// 			{
// 				path: 'type', // product/id/type
// 				component: TypeComponent,
// 			},
// 			{
// 				path: 'description', // product/id/description
// 				component: DescriptionComponent,
// 				children: [
// 					{
// 						path: 'root',
// 						component: DetailsComponent,
// 					},
// 					// Not work
// 					// {
// 					// 	path: 're', // description/re
// 					// 	pathMatch: 'full',
// 					// 	redirectTo: 'type',
// 					// }
// 				]
// 			},
// 			{
// 				path: 'description/re',
// 				pathMatch: 'full',
// 				redirectTo: 'type',
// 			},
// 			{
// 				path: '', // product/id
// 				pathMatch: 'full',
// 				redirectTo: 'description',
// 			},
// 			// {
// 			// 	path: 'root', // product/id
// 			// 	pathMatch: 'full',
// 			// 	redirectTo: 'description',
// 			// },
// 		] as Routes,
// 	},
// 	{
// 		path: 'root/:id',
// 		component: ProductComponent,
// 	},
// 	{
// 		path: ':id/root',
// 		redirectTo: 'root/:id',
// 	},
// {
// 	path: '**',
// 	component: NotFoundComponent,
// },
// 	// {
// 	// 	path: '',
// 	// 	pathMatch: 'prefix',
// 	// 	redirectTo: '/products-list',
// 	// },
// ];

const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		redirectTo: '/products-list',
	},
	{
		path: 'products-list',
		loadChildren: () => import('./modules/products-list/products-list.module').then(m => m.ProductsListModule), // children: routes from ProductsListRoutingModule
		// canDeactivate: [CanDeactivateGuard],
		// resolve: {
		// 	products: ProductsResolver,
		// }
	},
	{
		path: 'product',
		loadChildren: () => import('./modules/product/product.module').then(m => m.ProductModule),
		// canActivate: [CanActivateGuard],
		// canLoad: [CanLoadGuard],
		// canDeactivate: [CanDeactivateGuard],
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
