import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { questionData } from '../../../shared/data/faq/faq';
import { NgbAccordionConfig, NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-questions',
    imports: [CommonModule, NgbModule],
    templateUrl: './questions.html',
    styleUrl: './questions.scss'
})
export class Questions {

  public config = inject(NgbAccordionConfig);

  public questionData = questionData;

  constructor() {
		this.config.closeOthers = true;
  }	

}
