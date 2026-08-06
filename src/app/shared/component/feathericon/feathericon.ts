import { Component, input, ChangeDetectionStrategy } from '@angular/core';

import * as feather from 'feather-icons';

@Component({
  selector: 'app-feather-icon',
  imports: [],
  templateUrl: './feathericon.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './feathericon.scss',
})
export class Feathericon {
  public readonly icon = input<string>();

  ngAfterViewInit() {
    feather.replace();
  }
}
