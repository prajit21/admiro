import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RightRibbons } from '../../../../shared/data/bonus-ui/ribbons';

@Component({
  selector: 'app-variations-right-ribbons',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './variations-right-ribbons.component.html',
  styleUrl: './variations-right-ribbons.component.scss'
})
export class VariationsRightRibbonsComponent {

  public rightRibbonsData = RightRibbons;

}
