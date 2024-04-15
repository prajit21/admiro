import { Component } from '@angular/core';
import { VerticalStylel } from '../../../../shared/data/form-controls/mega-options';

@Component({
  selector: 'app-vertical-style',
  templateUrl: './vertical-style.component.html',
  styleUrl: './vertical-style.component.scss'
})
export class VerticalStyleComponent {

  public verticalstyleData = VerticalStylel;

}
