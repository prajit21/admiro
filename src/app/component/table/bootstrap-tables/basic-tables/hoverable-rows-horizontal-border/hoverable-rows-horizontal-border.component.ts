import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { hoverbleData } from '../../../../../shared/data/table/basic-tables';
import { FeathericonComponent } from '../../../../../shared/component/feathericon/feathericon.component';

@Component({
  selector: 'app-hoverable-rows-horizontal-border',
  standalone: true,
  imports: [CommonModule,FeathericonComponent],
  templateUrl: './hoverable-rows-horizontal-border.component.html',
  styleUrl: './hoverable-rows-horizontal-border.component.scss'
})
export class HoverableRowsHorizontalBorderComponent {

  public hoverble = hoverbleData;

}
