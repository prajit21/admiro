import { Component } from '@angular/core';
import { FontSize } from '../../../../shared/data/ui-kits/helper-classes';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-font-size',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './font-size.component.html',
  styleUrl: './font-size.component.scss'
})
export class FontSizeComponent {

  public fonstSizeData = FontSize;

}
