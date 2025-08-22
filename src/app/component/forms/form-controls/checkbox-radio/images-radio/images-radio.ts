import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { imageRadio } from '../../../../../shared/data/form-controls/checkbox-radio';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-images-radio',
    imports: [CommonModule, FormsModule],
    templateUrl: './images-radio.html',
    styleUrl: './images-radio.scss'
})
export class ImagesRadio {

  public imgradioData = imageRadio;

}
