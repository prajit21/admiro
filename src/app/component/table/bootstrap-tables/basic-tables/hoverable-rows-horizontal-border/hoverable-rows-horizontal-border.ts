import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { hoverbleData } from '../../../../../shared/data/table/basic-tables';
import { Feathericon } from '../../../../../shared/component/feathericon/feathericon';

@Component({
    selector: 'app-hoverable-rows-horizontal-border',
    imports: [CommonModule, Feathericon],
    templateUrl: './hoverable-rows-horizontal-border.html',
    styleUrl: './hoverable-rows-horizontal-border.scss'
})
export class HoverableRowsHorizontalBorder {

  public hoverble = hoverbleData;

}
