import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { caption } from '../../../../../shared/data/table/basic-tables';

@Component({
  selector: 'app-caption',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './caption.component.html',
  styleUrl: './caption.component.scss'
})
export class CaptionComponent {

  public captionData = caption;

}
