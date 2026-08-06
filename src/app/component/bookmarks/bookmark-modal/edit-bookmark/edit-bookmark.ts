import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edit-bookmark',
  imports: [],
  templateUrl: './edit-bookmark.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './edit-bookmark.scss',
})
export class EditBookmark {
  public activeModal = inject(NgbActiveModal);
}
