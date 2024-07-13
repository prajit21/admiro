import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IconSiwtchSizing } from '../../../../../shared/data/forms-widgets/switch';

@Component({
  selector: 'app-switch-with-icons',
  standalone: true,
  imports: [CommonModule],  
  templateUrl: './switch-with-icons.component.html',
  styleUrl: './switch-with-icons.component.scss'
})
export class SwitchWithIconsComponent {

  public IconsizeingData = IconSiwtchSizing;

}
