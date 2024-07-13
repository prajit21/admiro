import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NgbModule, NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { featuredTutorial } from '../../../shared/data/faq/faq';

@Component({
  selector: 'app-featured-tutorials',
  standalone: true,
  imports: [CommonModule, NgbModule],
  templateUrl: './featured-tutorials.component.html',
  styleUrl: './featured-tutorials.component.scss'
})
export class FeaturedTutorialsComponent {

  @Input() data : featuredTutorial[];

  constructor(public config: NgbRatingConfig) {
    config.max = 5;
    config.readonly = true;
  }

}
