import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

import { NgbAccordionConfig, NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { questionData } from '../../../shared/data/faq/faq';

@Component({
  selector: 'app-questions',
  imports: [NgbModule],
  templateUrl: './questions.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './questions.scss',
})
export class Questions {
  public config = inject(NgbAccordionConfig);

  public questionData = questionData;

  constructor() {
    this.config.closeOthers = true;
  }
}
