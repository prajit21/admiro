import { Component } from '@angular/core';
import { commonImg, autoWidthoption } from '../../../../shared/data/bonus-ui/owl-carousel';


@Component({
  selector: 'app-auto-widht-example',
  templateUrl: './auto-widht-example.component.html',
  styleUrl: './auto-widht-example.component.scss'
})
export class AutoWidhtExampleComponent {

  public widthData = commonImg;
  public autowidhtoptionsData = autoWidthoption;

}
