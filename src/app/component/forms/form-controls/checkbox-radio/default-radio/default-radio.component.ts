import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { defaultRedio } from '../../../../../shared/data/form-controls/checkbox-radio';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-default-radio',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './default-radio.component.html',
  styleUrl: './default-radio.component.scss'
})
export class DefaultRadioComponent {

  public redio = defaultRedio;

}
