import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edit-bookmark',
  imports: [CommonModule],
  templateUrl: './edit-bookmark.html',
  styleUrl: './edit-bookmark.scss',
})
export class EditBookmark {
  public activeModal = inject(NgbActiveModal);
}
