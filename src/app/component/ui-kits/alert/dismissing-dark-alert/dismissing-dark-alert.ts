import { NgClass } from '@angular/common';
import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-dismissing-dark-alert',
  imports: [NgClass],
  templateUrl: './dismissing-dark-alert.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './dismissing-dark-alert.scss',
})
export class DismissingDarkAlert {
  public alerts: boolean = true;

  close() {
    this.alerts = false;
  }
}
