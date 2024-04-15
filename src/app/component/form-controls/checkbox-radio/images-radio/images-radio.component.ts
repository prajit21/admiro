import { Component } from '@angular/core';
import { imageRadio } from '../../../../shared/data/form-controls/checkbox-radio';

@Component({
  selector: 'app-images-radio',
  templateUrl: './images-radio.component.html',
  styleUrl: './images-radio.component.scss'
})
export class ImagesRadioComponent {

  public imgradioData = imageRadio;

}
