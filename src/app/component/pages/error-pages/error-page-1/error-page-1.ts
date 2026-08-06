import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-error-page-1',
  imports: [RouterModule],
  templateUrl: './error-page-1.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './error-page-1.scss',
})
export class ErrorPage1 {}
