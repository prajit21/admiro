import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-category',
  imports: [NgbModule],
  templateUrl: './add-category.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './add-category.scss',
})
export class AddCategory {
  public activeModal = inject(NgbActiveModal);
}
