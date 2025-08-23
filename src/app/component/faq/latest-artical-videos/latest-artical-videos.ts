import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

import { Feathericon } from '../../../shared/component/feathericon/feathericon';
import { articlesAndVideos } from '../../../shared/data/faq/faq';

@Component({
  selector: 'app-latest-artical-videos',
  imports: [CommonModule, Feathericon],
  templateUrl: './latest-artical-videos.html',
  styleUrl: './latest-artical-videos.scss',
})
export class LatestArticalVideos {
  readonly data = input<articlesAndVideos[]>();
}
