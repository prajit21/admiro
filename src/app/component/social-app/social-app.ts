import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { SoicalProfile } from './soical-profile/soical-profile';

@Component({
  selector: 'app-social-app',
  imports: [CommonModule, SoicalProfile],
  templateUrl: './social-app.html',
  styleUrl: './social-app.scss',
})
export class SocialApp {}
