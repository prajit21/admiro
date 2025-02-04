import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-color-schemes',
    imports: [CommonModule],
    templateUrl: './color-schemes.component.html',
    styleUrl: './color-schemes.component.scss'
})
export class ColorSchemesComponent {

  public colorschemes: boolean = true;

  close() {
    this.colorschemes = false;
  }

}
