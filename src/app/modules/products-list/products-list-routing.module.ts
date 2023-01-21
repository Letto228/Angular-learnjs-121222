import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsResolver } from '../../shared/test-guards/products.resolver';
import { ProductsListComponent } from './products-list.component';

const routes: Routes = [
	{
		path: '',
		component: ProductsListComponent,
	},
	{
		path: ':subcategoryId',
		component: ProductsListComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class ProductsListRoutingModule {}
