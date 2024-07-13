import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AutoHeightExampleComponent } from './auto-height-example/auto-height-example.component';
import { AutoPlayComponent } from './auto-play/auto-play.component';
import { AutoWidhtExampleComponent } from './auto-widht-example/auto-widht-example.component';
import { CenterExampleComponent } from './center-example/center-example.component';
import { CrossFadeComponent } from './cross-fade/cross-fade.component';
import { LazyLoadExampleComponent } from './lazy-load-example/lazy-load-example.component';
import { ResponsiveExampleComponent } from './responsive-example/responsive-example.component';
import { RightLeftExampleComponent } from './right-left-example/right-left-example.component';
import { SlidesOnlyComponent } from './slides-only/slides-only.component';

@Component({
  selector: 'app-owl-carousel',
  standalone: true,
  imports: [CommonModule,AutoHeightExampleComponent,AutoPlayComponent,AutoWidhtExampleComponent,CenterExampleComponent
  ,CrossFadeComponent,LazyLoadExampleComponent,ResponsiveExampleComponent,RightLeftExampleComponent,SlidesOnlyComponent],
  templateUrl: './owl-carousel.component.html',
  styleUrl: './owl-carousel.component.scss'
})
export class OwlCarouselComponent {

}
