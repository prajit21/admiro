import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DefultSelect2Component } from './defult-select2/defult-select2.component';
import { FullColoredVariantComponent } from './full-colored-variant/full-colored-variant.component';
import { OutlineColorVariantComponent } from './outline-color-variant/outline-color-variant.component';

@Component({
    selector: 'app-select2',
    imports: [CommonModule, DefultSelect2Component, FullColoredVariantComponent, OutlineColorVariantComponent],
    templateUrl: './select2.component.html',
    styleUrl: './select2.component.scss'
})
export class Select2Component {

}
