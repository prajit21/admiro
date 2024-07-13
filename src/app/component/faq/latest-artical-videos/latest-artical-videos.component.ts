import { Component, Input } from '@angular/core';
import { articlesAndVideos } from '../../../shared/data/faq/faq';
import { CommonModule } from '@angular/common';
import { FeathericonComponent } from '../../../shared/component/feathericon/feathericon.component';

@Component({
  selector: 'app-latest-artical-videos',
  standalone: true,
  imports: [CommonModule,FeathericonComponent],
  templateUrl: './latest-artical-videos.component.html',
  styleUrl: './latest-artical-videos.component.scss'
})
export class LatestArticalVideosComponent {

  @Input() data: articlesAndVideos[];

}
