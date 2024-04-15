import { Component } from '@angular/core';
import { BorderedRadio, IconsRadio, FilledRadio } from '../../../../,./../shared/data/form-controls/checkbox-radio';


@Component({
  selector: 'app-custom-radio',
  templateUrl: './custom-radio.component.html',
  styleUrl: './custom-radio.component.scss'
})
export class CustomRadioComponent {

  public borderData = BorderedRadio;
  public iconData = IconsRadio;
  public filledData = FilledRadio;

}
