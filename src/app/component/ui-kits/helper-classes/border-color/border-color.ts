import { Component } from '@angular/core';
import { Bordercolors } from '../../../../shared/data/ui-kits/helper-classes';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-border-color',
    imports: [CommonModule],
    templateUrl: './border-color.html',
    styleUrl: './border-color.scss'
})
export class BorderColor {

  public borderColorData = Bordercolors;

}
