import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { VerticalStylel } from '../../../../../shared/data/form-controls/mega-options';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-vertical-style',
    imports: [CommonModule, FormsModule],
    templateUrl: './vertical-style.html',
    styleUrl: './vertical-style.scss'
})
export class VerticalStyle {

  public verticalstyleData = VerticalStylel;

}
