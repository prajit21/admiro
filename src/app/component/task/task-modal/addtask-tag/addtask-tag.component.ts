import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-addtask-tag',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './addtask-tag.component.html',
  styleUrl: './addtask-tag.component.scss'
})
export class AddtaskTagComponent {

  constructor(public activeModal: NgbActiveModal) { }

}
