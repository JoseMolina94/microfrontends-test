import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpContextToken,
  HttpContext
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

export const ERROR_CONTEXT = new HttpContextToken<ErrorContext>(() => ({ key: '' }));

export interface ErrorContext {
  key: string;
  customMessage?: string;
}

@Injectable()
export class DynamicErrorInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        const context = request.context.get(ERROR_CONTEXT);
        
        if (context?.key && request.url.includes(context.key)) {
          console.error(`Error en ${context.key}:`, error);
          
          return throwError(() => ({
            message: context.customMessage || `Error al cargar ${context.key}`,
            originalError: error.message,
            status: error.status
          }));
        }
        return throwError(() => error);
      })
    );
  }
}