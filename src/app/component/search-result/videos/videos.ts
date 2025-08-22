import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { inject } from '@angular/core';
import * as Data from '../../../shared/data/search-result/search-result';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
    selector: 'app-videos',
    imports: [CommonModule],
    templateUrl: './videos.html',
    styleUrl: './videos.scss'
})
export class Videos {

  public videosData = Data.videosData;

  public sanitizer = inject(DomSanitizer);


  safe(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
