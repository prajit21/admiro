import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { autoPlayVariant, autovariantOption } from '../../../../shared/data/bonus-ui/owl-carousel';
import { CarouselModule } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-auto-play',
  standalone: true,
  imports: [CommonModule,CarouselModule],
  templateUrl: './auto-play.component.html',
  styleUrl: './auto-play.component.scss'
})
export class AutoPlayComponent {

  public autovariantoptionsData = autovariantOption;
  public autoVariantData = autoPlayVariant;

}
