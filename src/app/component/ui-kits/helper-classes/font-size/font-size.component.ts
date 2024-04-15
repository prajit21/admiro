import { Component } from '@angular/core';
import { FontSize } from '../../../../shared/data/ui-kits/helper-classes';

@Component({
  selector: 'app-font-size',
  templateUrl: './font-size.component.html',
  styleUrl: './font-size.component.scss'
})
export class FontSizeComponent {

  public fonstSizeData = FontSize;

}
