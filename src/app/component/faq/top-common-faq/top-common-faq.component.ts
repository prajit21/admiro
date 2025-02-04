import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { faqTopPart } from '../../../shared/data/faq/faq';
import { FeathericonComponent } from '../../../shared/component/feathericon/feathericon.component';

@Component({
    selector: 'app-top-common-faq',
    imports: [CommonModule, FeathericonComponent],
    templateUrl: './top-common-faq.component.html',
    styleUrl: './top-common-faq.component.scss'
})
export class TopCommonFaqComponent {

  @Input() data : faqTopPart[];

}
