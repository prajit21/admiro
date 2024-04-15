import { Component } from '@angular/core';
import { LayoutService } from '../../services/layout.service';

@Component({
  selector: 'app-customizer',
  templateUrl: './customizer.component.html',
  styleUrl: './customizer.component.scss'
})
export class CustomizerComponent {

 
  constructor( public layoutService: LayoutService) { }

  Customizer(val: string) {
    this.layoutService.customizer = val;
  }

}
