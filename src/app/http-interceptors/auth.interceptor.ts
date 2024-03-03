import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable()
export class ApiKeyInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Add the API key to the request headers
    const apiKeyReq = request.clone({
      setHeaders: {
        'x-api-key': environment.apiKey // Make sure apiKey is defined in your environment file
      }
    });

    return next.handle(apiKeyReq);
  }
}
