import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { buttons, buttonsGroup } from '../../shared/data/buttons/buttons';

@Component({
  selector: 'app-buttons',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.scss'
})
export class ButtonsComponent {

  public buttonsData = buttons;
  public buttongroup = buttonsGroup;

}
