import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpMethod } from '../utils/http-constants';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  request<T>(method: string, url: string, body?: any): Observable<T> {
    switch (method.toUpperCase()) {
      case HttpMethod.GET:
        return this.http.get<T>(url);
      case HttpMethod.POST:
        return this.http.post<T>(url, body);
      case HttpMethod.PUT:
        return this.http.put<T>(url, body);
      case HttpMethod.DELETE:
        return this.http.delete<T>(url);
      default:
        throw new Error(`Unsupported HTTP method: ${method}`);
    }
  }
}
