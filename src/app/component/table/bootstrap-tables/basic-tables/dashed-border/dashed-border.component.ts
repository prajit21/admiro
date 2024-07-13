import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DashedBorder } from '../../../../../shared/data/table/basic-tables';

@Component({
  selector: 'app-dashed-border',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashed-border.component.html',
  styleUrl: './dashed-border.component.scss'
})
export class DashedBorderComponent {

  public dashborderData = DashedBorder;

}
