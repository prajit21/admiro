import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Multiplebars } from '../../../../shared/data/ui-kits/progress';

@Component({
  selector: 'app-multiple-bars',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './multiple-bars.component.html',
  styleUrl: './multiple-bars.component.scss'
})
export class MultipleBarsComponent {

  public mutiPalbarData = Multiplebars;

}
