import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-error-page-1',
  imports: [CommonModule, RouterModule],
  templateUrl: './error-page-1.html',
  styleUrl: './error-page-1.scss',
})
export class ErrorPage1 {}
