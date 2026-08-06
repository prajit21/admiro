import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-error-page-4',
  imports: [RouterModule],
  templateUrl: './error-page-4.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './error-page-4.scss',
})
export class ErrorPage4 {}
