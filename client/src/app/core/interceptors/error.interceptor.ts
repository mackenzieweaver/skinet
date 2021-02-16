import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    // navigation functionality
    constructor(private router: Router, private toastr: ToastrService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
                catchError(error => {
                    if (error){
                        // validation error
                        if (error.status === 400){
                            // toastr service
                            this.toastr.error(error.error.message, error.error.statusCode);
                        }
                        if (error.status === 401){
                            // toastr service
                            this.toastr.error(error.error.message, error.error.statusCode);
                        }
                        if (error.status === 404){
                            this.router.navigateByUrl('/not-found');
                        }
                        if (error.status === 500){
                            this.router.navigateByUrl('/server-error');
                        }
                    }
                    return throwError(error);
                })
            );
    }

}
