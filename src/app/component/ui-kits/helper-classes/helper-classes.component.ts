import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BorderColorComponent } from './border-color/border-color.component';
import { FontSizeComponent } from './font-size/font-size.component';
import { BorderDisplaysComponent } from './border-displays/border-displays.component';
import { FontStyleComponent } from './font-style/font-style.component';
import { FontWeightComponent } from './font-weight/font-weight.component';
import { ImagesSizesComponent } from './images-sizes/images-sizes.component';
import { StylesBackgroudComponent } from './styles-backgroud/styles-backgroud.component';
import { StylesBordersComponent } from './styles-borders/styles-borders.component';
import { TextColorComponent } from './text-color/text-color.component';

@Component({
  selector: 'app-helper-classes',
  standalone: true,
  imports: [CommonModule,BorderColorComponent,FontSizeComponent,BorderDisplaysComponent
  ,FontStyleComponent,FontWeightComponent,ImagesSizesComponent,StylesBackgroudComponent,
  StylesBordersComponent,TextColorComponent],
  templateUrl: './helper-classes.component.html',
  styleUrl: './helper-classes.component.scss'
})
export class HelperClassesComponent {

}
