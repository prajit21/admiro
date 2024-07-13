import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LeftRibbons } from '../../../../shared/data/bonus-ui/ribbons';

@Component({
  selector: 'app-variations-left-ribbons',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './variations-left-ribbons.component.html',
  styleUrl: './variations-left-ribbons.component.scss'
})
export class VariationsLeftRibbonsComponent {

  public leftRibbonsData = LeftRibbons;

}
