import { Component } from '@angular/core';
import { caption } from '../../../../../shared/data/table/basic-tables';

@Component({
  selector: 'app-caption',
  templateUrl: './caption.component.html',
  styleUrl: './caption.component.scss'
})
export class CaptionComponent {

  public captionData = caption;

}
