import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SoicalProfileComponent } from './soical-profile/soical-profile.component';

@Component({
    selector: 'app-social-app',
    imports: [CommonModule, SoicalProfileComponent],
    templateUrl: './social-app.component.html',
    styleUrl: './social-app.component.scss'
})
export class SocialAppComponent {

}
