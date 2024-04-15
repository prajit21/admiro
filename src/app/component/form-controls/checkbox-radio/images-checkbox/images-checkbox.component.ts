import { Component } from '@angular/core';
import { imageChekbox } from '../../../../shared/data/form-controls/checkbox-radio';

@Component({
  selector: 'app-images-checkbox',
  templateUrl: './images-checkbox.component.html',
  styleUrl: './images-checkbox.component.scss'
})
export class ImagesCheckboxComponent {
  
  public imgcheckboxData = imageChekbox;

}
