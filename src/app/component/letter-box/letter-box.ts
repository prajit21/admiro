import { Component, ChangeDetectionStrategy } from '@angular/core';

import { LetterboxSidebar } from './letterbox-sidebar/letterbox-sidebar';

@Component({
  selector: 'app-letter-box',
  imports: [LetterboxSidebar],
  templateUrl: './letter-box.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './letter-box.scss',
})
export class LetterBox {}
