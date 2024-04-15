import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorPagesRoutingModule } from './error-pages-routing.module';

import { ErrorPage1Component } from './error-page-1/error-page-1.component';
import { ErrorPage2Component } from './error-page-2/error-page-2.component';
import { ErrorPage3Component } from './error-page-3/error-page-3.component';
import { ErrorPage4Component } from './error-page-4/error-page-4.component';
import { ErrorPage5Component } from './error-page-5/error-page-5.component';
import { ErrorPage6Component } from './error-page-6/error-page-6.component';

@NgModule({
  declarations: [
    ErrorPage1Component,
    ErrorPage2Component,
    ErrorPage3Component,
    ErrorPage4Component,
    ErrorPage5Component,
    ErrorPage6Component
  ],
  imports: [
    CommonModule,
    ErrorPagesRoutingModule
  ]
})
export class ErrorPagesModule { }
