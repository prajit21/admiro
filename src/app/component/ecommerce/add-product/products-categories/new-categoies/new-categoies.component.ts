import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-new-categoies',
  templateUrl: './new-categoies.component.html',
  styleUrl: './new-categoies.component.scss'
})
export class NewCategoiesComponent {

  public htmlContent = '';
  
  constructor(public activeModal: NgbActiveModal) { }

}
