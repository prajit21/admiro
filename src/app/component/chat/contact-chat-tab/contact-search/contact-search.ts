import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { Feathericon } from '../../../../shared/component/feathericon/feathericon';

@Component({
  selector: 'app-contact-search',
  imports: [CommonModule, Feathericon],
  templateUrl: './contact-search.html',
  styleUrl: './contact-search.scss',
})
export class ContactSearch {}
