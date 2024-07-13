import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { basictable } from '../../../../../shared/data/table/basic-tables';

@Component({
  selector: 'app-border-bottom-color',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './border-bottom-color.component.html',
  styleUrl: './border-bottom-color.component.scss'
})
export class BorderBottomColorComponent {

  public basicTable = basictable;

}
