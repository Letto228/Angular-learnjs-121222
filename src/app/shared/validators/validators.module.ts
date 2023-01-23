import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IsStringDirective } from './directives/is-string.directive';
import { IsStringAsyncDirective } from './directives/is-string-async.directive';

@NgModule({
	declarations: [IsStringDirective, IsStringAsyncDirective],
	imports: [CommonModule],
	exports: [IsStringDirective, IsStringAsyncDirective],
})
export class ValidatorsModule {}
