import { Inject, Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse } from '@angular/common/http';
import { catchError, Observable, tap } from 'rxjs';
import { BASE_URL } from './base-url.token';

@Injectable()
export class BaseUrlInterceptor implements HttpInterceptor {
	constructor(@Inject(BASE_URL) private readonly baseUrl: string) {}

	intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
		const newRequest = request.clone({
			url: this.baseUrl + request.url,
		});

		return next.handle(newRequest).pipe(
			tap(event => {
				if (event instanceof HttpResponse) {
					console.log(event);
				}
			}),
		);
	}
	// intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
	//   return next.handle(request).pipe(
	//     catchError(...)
	//   );
	// }
}
