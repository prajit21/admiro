import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { checkbox } from '../../../../../shared/data/form-controls/checkbox-radio';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-default-checkbox',
    imports: [CommonModule, FormsModule],
    templateUrl: './default-checkbox.component.html',
    styleUrl: './default-checkbox.component.scss'
})
export class DefaultCheckboxComponent {

  public checkboxData = checkbox;

}
