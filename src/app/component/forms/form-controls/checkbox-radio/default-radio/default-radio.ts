import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { defaultRedio } from '../../../../../shared/data/form-controls/checkbox-radio';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-default-radio',
    imports: [CommonModule, FormsModule],
    templateUrl: './default-radio.html',
    styleUrl: './default-radio.scss'
})
export class DefaultRadio {

  public redio = defaultRedio;

}
