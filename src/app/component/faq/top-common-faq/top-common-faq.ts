import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { faqTopPart } from '../../../shared/data/faq/faq';
import { Feathericon } from '../../../shared/component/feathericon/feathericon';

@Component({
    selector: 'app-top-common-faq',
    imports: [CommonModule, Feathericon],
    templateUrl: './top-common-faq.html',
    styleUrl: './top-common-faq.scss'
})
export class TopCommonFaq {

  readonly data = input<faqTopPart[]>();

}
