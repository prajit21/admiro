import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-add-category',
    imports: [CommonModule, NgbModule],
    templateUrl: './add-category.component.html',
    styleUrl: './add-category.component.scss'
})
export class AddCategoryComponent {

  constructor(public activeModal: NgbActiveModal) { }

}
