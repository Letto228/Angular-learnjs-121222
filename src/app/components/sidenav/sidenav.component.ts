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
	@ViewChild(MatDrawer, { read: MatDrawer, static: true })
	private drawer!: MatDrawer;
	@ViewChild('viewContainer', { read: ViewContainerRef, static: true })
	private viewContainer!: ViewContainerRef;

	@ContentChild('navigationList', { static: true })
	private navigationListTemplate!: TemplateRef<unknown>;

	ngOnInit() {
		this.viewContainer.createEmbeddedView(this.navigationListTemplate);
	}

	sidenavToggle() {
		this.drawer.toggle();
	}
}
