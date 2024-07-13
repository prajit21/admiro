import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { center, owlcarousel1ptions } from '../../../../shared/data/bonus-ui/owl-carousel';
import { CarouselModule } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-center-example',
  standalone: true,
  imports: [CommonModule,CarouselModule],
  templateUrl: './center-example.component.html',
  styleUrl: './center-example.component.scss'
})
export class CenterExampleComponent {

  public centerData = center;
  public centeroptions = owlcarousel1ptions;

}
