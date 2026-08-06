import { Component, ChangeDetectionStrategy } from '@angular/core';

import { Feathericon } from '../../../../shared/component/feathericon/feathericon';

@Component({
  selector: 'app-contact-search',
  imports: [Feathericon],
  templateUrl: './contact-search.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './contact-search.scss',
})
export class ContactSearch {}
