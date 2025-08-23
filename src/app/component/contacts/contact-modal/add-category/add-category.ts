import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';

import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-category',
  imports: [CommonModule, NgbModule],
  templateUrl: './add-category.html',
  styleUrl: './add-category.scss',
})
export class AddCategory {
  public activeModal = inject(NgbActiveModal);
}
