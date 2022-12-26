import {
	AfterViewInit,
	Component,
	ContentChild,
	ElementRef,
	EventEmitter,
	Input,
	OnChanges,
	OnDestroy,
	OnInit,
	Output,
	SimpleChanges,
	TemplateRef,
	ViewChild,
	ViewContainerRef,
} from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
	selector: 'app-sidenav',
	templateUrl: './sidenav.component.html',
	styleUrls: ['./sidenav.component.less'],
})
export class SidenavComponent {
	// @Input() set navigationList(template: TemplateRef<unknown>) {
	// 	this.viewContainer?.clear();

	// 	// if (template) {
	// 		this.viewContainer?.createEmbeddedView(template);
	// 	// }
	// };

	@ViewChild(MatDrawer, { read: MatDrawer, static: true })
	private drawer!: MatDrawer;
	@ViewChild('viewContainer', { read: ViewContainerRef, static: true })
	private viewContainer!: ViewContainerRef;

	@ContentChild('navigationList', { static: true })
	private navigationListTemplate!: TemplateRef<unknown>;
	// @ContentChild('h', {static: true, descendants: false})
	// private set h(elementRef: ElementRef | undefined) {
	// 	console.log(elementRef);
	// };

	// @ViewChild(MatDrawer, {read: ElementRef, static: false})
	// private drawerElement: ElementRef<HTMLElement> | undefined;

	ngOnInit() {
		this.viewContainer.createEmbeddedView(this.navigationListTemplate);
		// console.log(this.drawer);
		// console.log(this.drawerElement);
	}

	// opened = false;

	// @Input() navigationList: TemplateRef<unknown> | undefined;
	// ngOnChanges({navigationList}: SimpleChanges) {
	// 	if (navigationList) {
	// 		this.viewContainer?.clear();

	// 		if (this.navigationList) {
	// 			this.viewContainer?.createEmbeddedView(this.navigationList);
	// 		}

	// 	}
	// }

	sidenavToggle() {
		this.drawer.toggle();
		// console.log(this.drawerElement?.nativeElement);
	}

	// ngOnInit(): void {
	// 	console.log(this.drawer);
	// 	this.drawer?.toggle();
	// }

	// ngAfterViewInit(): void {
	// 	console.log(this.drawer);
	// 	// this.opened = true;
	// 	// this.drawer?.toggle();
	// }

	// ngOnDestroy(): void {

	// }
}
