import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { questionData } from '../../../shared/data/faq/faq';
import { NgbAccordionConfig, NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-questions',
    imports: [CommonModule, NgbModule],
    templateUrl: './questions.component.html',
    styleUrl: './questions.component.scss'
})
export class QuestionsComponent {

  public questionData = questionData;

  constructor(config: NgbAccordionConfig) {
		config.closeOthers = true;
  }	

}
