import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { VerticalStylel } from '../../../../../shared/data/form-controls/mega-options';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-vertical-style',
    imports: [CommonModule, FormsModule],
    templateUrl: './vertical-style.component.html',
    styleUrl: './vertical-style.component.scss'
})
export class VerticalStyleComponent {

  public verticalstyleData = VerticalStylel;

}
