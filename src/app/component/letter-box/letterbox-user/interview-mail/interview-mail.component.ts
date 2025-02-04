import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { UserDetailsComponent } from './user-details/user-details.component';
import { FeathericonComponent } from '../../../../shared/component/feathericon/feathericon.component';

@Component({
    selector: 'app-interview-mail',
    imports: [CommonModule, UserDetailsComponent, FeathericonComponent],
    templateUrl: './interview-mail.component.html',
    styleUrl: './interview-mail.component.scss'
})
export class InterviewMailComponent {

  @Output() filterValue = new EventEmitter<boolean>();

  public open: boolean = false;

  openFilter(){
    this.open =! this.open
    this.filterValue.emit(this.open)
  }

}
