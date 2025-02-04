import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { basicCheckbox, simpleRadio } from '../../../../../shared/data/form-controls/checkbox-radio';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-basic-radio-checkbox',
    imports: [CommonModule, FormsModule],
    templateUrl: './basic-radio-checkbox.component.html',
    styleUrl: './basic-radio-checkbox.component.scss'
})
export class BasicRadioCheckboxComponent {

  public basicItem = basicCheckbox;
  public radioData = simpleRadio;

}
