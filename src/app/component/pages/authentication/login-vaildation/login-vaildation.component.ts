import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonLoginFormComponent } from '../common-login-form/common-login-form.component';

@Component({
    selector: 'app-login-vaildation',
    imports: [CommonModule, RouterModule, CommonLoginFormComponent],
    templateUrl: './login-vaildation.component.html',
    styleUrl: './login-vaildation.component.scss'
})
export class LoginVaildationComponent {

}
