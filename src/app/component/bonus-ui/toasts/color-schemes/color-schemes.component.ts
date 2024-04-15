import { Component } from '@angular/core';

@Component({
  selector: 'app-color-schemes',
  templateUrl: './color-schemes.component.html',
  styleUrl: './color-schemes.component.scss'
})
export class ColorSchemesComponent {

  public colorschemes: boolean = true;

  close() {
    this.colorschemes = false;
  }

}
