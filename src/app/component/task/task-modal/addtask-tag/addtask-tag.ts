import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-addtask-tag',
  imports: [],
  templateUrl: './addtask-tag.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './addtask-tag.scss',
})
export class AddtaskTag {
  public activeModal = inject(NgbActiveModal);
}
