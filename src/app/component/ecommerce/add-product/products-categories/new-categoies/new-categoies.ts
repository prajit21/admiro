import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AngularEditorModule } from '@kolkov/angular-editor';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-new-categoies',
  imports: [AngularEditorModule, FormsModule],
  templateUrl: './new-categoies.html',
  styleUrl: './new-categoies.scss',
})
export class NewCategoies {
  public htmlContent = '';

  public activeModal = inject(NgbActiveModal);
}
