import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    request = request.clone({
      setHeaders: {
        'X-RapidAPI-Host': 'rawg-video-games-database.p.rapidapi.com',
        'X-RapidAPI-Key': '8c06a5be42msh8730d65b5dc75a3p12d3d5jsncdd150ca7c0a'
      },
      setParams:  {
        "key": "86a6a34782f14c33b2b081cee33a65ea",
      }
    });
    return next.handle(request);
  }
}
