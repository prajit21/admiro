import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-without-borders-style',
  imports: [FormsModule],
  templateUrl: './without-borders-style.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './without-borders-style.scss',
})
export class WithoutBordersStyle {}
