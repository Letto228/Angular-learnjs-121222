import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanActivateChildGuard } from '../../shared/test-guards/can-activate-child.guard';
import { DescriptionComponent } from './description/description.component';
import { DetailsComponent } from './description/details/details.component';
import { ProductComponent } from './product.component';
import { TypeComponent } from './type/type.component';

const routes: Routes = [
	{
		path: ':id',
		component: ProductComponent,
		// canActivateChild: [CanActivateChildGuard],
		children: [
			{
				path: 'type',
				component: TypeComponent,
			},
			{
				path: 'description',
				component: DescriptionComponent,
				children: [
					{
						path: 'root',
						component: DetailsComponent,
					},
				],
			},
			{
				path: '',
				pathMatch: 'full',
				redirectTo: 'description',
			},
		],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class ProductRoutingModule {}
