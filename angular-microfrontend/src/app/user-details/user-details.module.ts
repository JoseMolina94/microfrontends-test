import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { DynamicErrorInterceptor } from '../../interceptors/dynamic-error.interceptor';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: DynamicErrorInterceptor,
      multi: true
    }
  ]
})
export class UserDetailsModule { }
