import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class CanActivateChildGuard implements CanActivateChild {
	constructor(private readonly router: Router) {}

	canActivateChild(
		_childRoute: ActivatedRouteSnapshot,
		_state: RouterStateSnapshot,
	): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
		return window.prompt('Хотите посетить дочернюю страницу?') === 'y' || this.router.createUrlTree(['/']);
	}
}
