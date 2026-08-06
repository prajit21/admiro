import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-error-page-3',
  imports: [RouterModule],
  templateUrl: './error-page-3.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './error-page-3.scss',
})
export class ErrorPage3 {}
