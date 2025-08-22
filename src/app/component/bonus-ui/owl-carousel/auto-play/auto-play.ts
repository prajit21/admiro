import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { autoPlayVariant, autovariantOption } from '../../../../shared/data/bonus-ui/owl-carousel';
import { CarouselModule } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-auto-play',
    imports: [CommonModule, CarouselModule],
    templateUrl: './auto-play.html',
    styleUrl: './auto-play.scss'
})
export class AutoPlay {

  public autovariantoptionsData = autovariantOption;
  public autoVariantData = autoPlayVariant;

}
