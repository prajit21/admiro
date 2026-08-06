import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-error-page-2',
  imports: [RouterModule],
  templateUrl: './error-page-2.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './error-page-2.scss',
})
export class ErrorPage2 {}
