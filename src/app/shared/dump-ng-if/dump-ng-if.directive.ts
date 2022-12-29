import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

interface IDumpNgIfContext<T> {
	$implicit: T;
	containerLength: number;
}

@Directive({
	selector: '[appDumpNgIf]',
})
export class DumpNgIfDirective<T> {
	@Input() set appDumpNgIf(visibilityFlag: T) {
		const isContainerHasView = this.viewContainerRef.length;

		if (isContainerHasView) {
			this.viewContainerRef.clear();
		}

		if (visibilityFlag) {
			const context: IDumpNgIfContext<T> = {
				$implicit: visibilityFlag,
				containerLength: 1,
			};

			this.viewContainerRef.createEmbeddedView(this.tempalteRef, context);
		}
	}

	constructor(private viewContainerRef: ViewContainerRef, private tempalteRef: TemplateRef<IDumpNgIfContext<T>>) {}
}
