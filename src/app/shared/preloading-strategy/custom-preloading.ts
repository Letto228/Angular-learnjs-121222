import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { mergeMap, Observable, of, Subject } from 'rxjs';

const preloadSubject = new Subject<string>();

setTimeout(() => {
	preloadSubject.next('product');
}, 3000);

@Injectable({
	providedIn: 'root',
})
export class CustomPreloading implements PreloadingStrategy {
	preload(route: Route, load: () => Observable<any>): Observable<any> {
		return preloadSubject.asObservable().pipe(mergeMap(path => (route.path === path ? load() : of(null))));
	}
}
