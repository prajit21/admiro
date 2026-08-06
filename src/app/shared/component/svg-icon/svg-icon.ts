import { Component, input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-svg-icon',
  imports: [],
  templateUrl: './svg-icon.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './svg-icon.scss',
})
export class SvgIcon {
  public readonly icon = input<string>();

  getSvgType() {
    return (
      document.getElementsByClassName('sidebar-wrapper')[0].getAttribute('icon') == 'stroke-svg'
    );
  }
}
