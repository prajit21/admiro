import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-add-tag',
    imports: [CommonModule],
    templateUrl: './add-tag.html',
    styleUrl: './add-tag.scss'
})
export class AddTag {

  public activeModal = inject(NgbActiveModal);

}
