import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest, HttpResponse, HttpErrorResponse, HttpClient
} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {Injectable} from '@angular/core';
import {catchError, tap} from 'rxjs/operators';
import {Router} from '@angular/router';

@Injectable()

export class InterceptorService implements HttpInterceptor {

  constructor(private router: Router) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError(err => {
          if (err instanceof HttpErrorResponse) {
            return throwError(this.redirectErrorPage(err.status));
          }
        }
      ));
  }

  redirectErrorPage(error): void {
    switch (error) {
      case 404:
        this.router.navigate(['not-found'], {
          skipLocationChange: true
        });
        break;
      default:
        this.router.navigate(['internal-server'], {
          skipLocationChange: true
        });
    }
  }
}
