import { Component } from '@angular/core';
import { buttons, buttonsGroup } from '../../shared/data/buttons/buttons';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.scss'
})
export class ButtonsComponent {

  public buttonsData = buttons;
  public buttongroup = buttonsGroup;

}
