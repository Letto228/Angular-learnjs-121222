import { forwardRef, InjectionToken } from '@angular/core';
import { SidenavComponent } from '../../components/sidenav/sidenav.component';
import { baseUrl } from './base-url.const';

export const BASE_URL = new InjectionToken('Base url for application', {
	providedIn: 'root',
	factory: () => baseUrl,
});
