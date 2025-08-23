import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { All } from './all/all';
import { Images } from './images/images';
import { Videos } from './videos/videos';

@Component({
  selector: 'app-search-result',
  imports: [CommonModule, All, Images, Videos],
  templateUrl: './search-result.html',
  styleUrl: './search-result.scss',
})
export class SearchResult {
  public openTab: string = 'All';

  public tabbed(val: string) {
    this.openTab = val;
  }
}
