import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { imageRadio } from '../../../../../shared/data/form-controls/checkbox-radio';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-images-radio',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './images-radio.component.html',
  styleUrl: './images-radio.component.scss'
})
export class ImagesRadioComponent {

  public imgradioData = imageRadio;

}
