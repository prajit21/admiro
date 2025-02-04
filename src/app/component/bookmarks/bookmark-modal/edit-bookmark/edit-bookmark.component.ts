import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-edit-bookmark',
    imports: [CommonModule],
    templateUrl: './edit-bookmark.component.html',
    styleUrl: './edit-bookmark.component.scss'
})
export class EditBookmarkComponent {

  constructor(public activeModal: NgbActiveModal) { }

}
