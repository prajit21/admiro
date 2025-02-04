import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonLoginFormComponent } from '../common-login-form/common-login-form.component';

@Component({
    selector: 'app-login-img-two',
    imports: [CommonModule, RouterModule, CommonLoginFormComponent],
    templateUrl: './login-img-two.component.html',
    styleUrl: './login-img-two.component.scss'
})
export class LoginImgTwoComponent {

}
