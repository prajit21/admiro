import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-new-contact',
    imports: [CommonModule, NgbModule, FormsModule, ReactiveFormsModule],
    templateUrl: './new-contact.component.html',
    styleUrl: './new-contact.component.scss'
})
export class NewContactComponent {

  public validate: boolean = false;
  constructor(public activeModal: NgbActiveModal) { }
  
  myForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl('', [Validators.email, Validators.required]),
    mobile: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
    img: new FormControl('assets/images/user/2.png'),
  })

  add() {
    this.activeModal.dismiss();
  }

  get firstName() {
    return this.myForm.get('firstName');
  }

  get lastName() {
    return this.myForm.get('lastName');
  }

  get email() {
    return this.myForm.get('email');
  }

  get mobile() {
    return this.myForm.get('mobile');
  }

}
