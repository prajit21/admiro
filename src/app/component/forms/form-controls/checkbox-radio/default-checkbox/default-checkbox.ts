import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { checkbox } from '../../../../../shared/data/form-controls/checkbox-radio';

@Component({
  selector: 'app-default-checkbox',
  imports: [CommonModule, FormsModule],
  templateUrl: './default-checkbox.html',
  styleUrl: './default-checkbox.scss',
})
export class DefaultCheckbox {
  public checkboxData = checkbox;
}
