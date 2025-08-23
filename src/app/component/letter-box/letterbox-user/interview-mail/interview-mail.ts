import { CommonModule } from '@angular/common';
import { Component, output } from '@angular/core';

import { UserDetails } from './user-details/user-details';
import { Feathericon } from '../../../../shared/component/feathericon/feathericon';

@Component({
  selector: 'app-interview-mail',
  imports: [CommonModule, UserDetails, Feathericon],
  templateUrl: './interview-mail.html',
  styleUrl: './interview-mail.scss',
})
export class InterviewMail {
  readonly filterValue = output<boolean>();

  public open: boolean = false;

  openFilter() {
    this.open = !this.open;
    this.filterValue.emit(this.open);
  }
}
