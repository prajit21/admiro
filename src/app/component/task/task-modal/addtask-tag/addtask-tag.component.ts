import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-addtask-tag',
  templateUrl: './addtask-tag.component.html',
  styleUrl: './addtask-tag.component.scss'
})
export class AddtaskTagComponent {

  constructor(public activeModal: NgbActiveModal) { }

}
