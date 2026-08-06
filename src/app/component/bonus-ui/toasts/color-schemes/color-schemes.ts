import { NgClass } from '@angular/common';
import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-color-schemes',
  imports: [NgClass],
  templateUrl: './color-schemes.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './color-schemes.scss',
})
export class ColorSchemes {
  public colorschemes: boolean = true;

  close() {
    this.colorschemes = false;
  }
}
