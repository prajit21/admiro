import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-addtask-tag',
  imports: [CommonModule],
  templateUrl: './addtask-tag.html',
  styleUrl: './addtask-tag.scss',
})
export class AddtaskTag {
  public activeModal = inject(NgbActiveModal);
}
