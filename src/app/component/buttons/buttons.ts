
import { Component } from '@angular/core';

import { buttons, buttonsGroup } from '../../shared/data/buttons/buttons';

@Component({
  selector: 'app-buttons',
  imports: [],
  templateUrl: './buttons.html',
  styleUrl: './buttons.scss',
})
export class Buttons {
  public buttonsData = buttons;
  public buttongroup = buttonsGroup;
}
