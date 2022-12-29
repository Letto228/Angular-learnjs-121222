import {
	AfterContentInit,
	AfterViewInit,
	Component,
	ContentChild,
	ContentChildren,
	ElementRef,
	EventEmitter,
	Input,
	OnChanges,
	OnDestroy,
	OnInit,
	Output,
	QueryList,
	SimpleChanges,
	TemplateRef,
	ViewChild,
	ViewChildren,
	ViewContainerRef,
} from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
	selector: 'app-sidenav',
	templateUrl: './sidenav.component.html',
	styleUrls: ['./sidenav.component.less'],
})
export class SidenavComponent implements OnInit, AfterContentInit {
	@ViewChild(MatDrawer, { read: MatDrawer, static: true })
	private drawer!: MatDrawer;
	// @ViewChild('viewContainer', { read: ViewContainerRef, static: true })
	// private viewContainer!: ViewContainerRef;

	// @ContentChild('navigationList', { static: true })
	// private navigationListTemplate!: TemplateRef<unknown>;

	// ngOnInit() {
	// 	this.viewContainer.createEmbeddedView(this.navigationListTemplate);
	// }

	// @ViewChildren('pEl', {emitDistinctChangesOnly: false})
	@ContentChildren('pEl', { emitDistinctChangesOnly: false })
	private pElement!: QueryList<ElementRef<HTMLElement>>;

	ngOnInit() {
		console.log(this.pElement);
	}

	// ngAfterViewInit() {
	// 	this.pElement.changes.subscribe(console.log);
	// 	console.log(this.pElement.map(({nativeElement}) => nativeElement.innerHTML));
	// }

	ngAfterContentInit() {
		console.log(this.pElement);
		console.log(this.pElement.map(({ nativeElement }) => nativeElement.innerHTML));
	}

	sidenavToggle() {
		this.drawer.toggle();
	}
}
