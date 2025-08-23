import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-horizontal-accordion',
  imports: [CommonModule],
  templateUrl: './horizontal-accordion.html',
  styleUrl: './horizontal-accordion.scss',
})
export class HorizontalAccordion {
  public togglecollpese = false;

  onClick() {
    this.togglecollpese = !this.togglecollpese;
  }
}
