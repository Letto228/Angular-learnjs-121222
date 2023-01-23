import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found.component';

@NgModule({
	declarations: [NotFoundComponent],
	imports: [CommonModule],
	exports: [NotFoundComponent],
	// providers: [
	// 	{
	// 		provide: 'name',
	// 		useValue: 'NotFoundModule',
	// 	}
	// ]
})
export class NotFoundModule {}
