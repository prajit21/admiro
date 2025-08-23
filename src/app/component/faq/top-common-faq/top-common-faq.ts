import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

import { Feathericon } from '../../../shared/component/feathericon/feathericon';
import { faqTopPart } from '../../../shared/data/faq/faq';

@Component({
  selector: 'app-top-common-faq',
  imports: [CommonModule, Feathericon],
  templateUrl: './top-common-faq.html',
  styleUrl: './top-common-faq.scss',
})
export class TopCommonFaq {
  readonly data = input<faqTopPart[]>();
}
