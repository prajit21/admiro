import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { defaultswitch } from '../../../../../shared/data/form-controls/checkbox-radio';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-default-switch',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './default-switch.component.html',
  styleUrl: './default-switch.component.scss'
})
export class DefaultSwitchComponent {

  public switches = defaultswitch;

}
