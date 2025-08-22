import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { defaultswitch } from '../../../../../shared/data/form-controls/checkbox-radio';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-default-switch',
    imports: [CommonModule, FormsModule],
    templateUrl: './default-switch.html',
    styleUrl: './default-switch.scss'
})
export class DefaultSwitch {

  public switches = defaultswitch;

}
