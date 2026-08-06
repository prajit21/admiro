import { Component, ChangeDetectionStrategy } from '@angular/core';

import { SoicalProfile } from './soical-profile/soical-profile';

@Component({
  selector: 'app-social-app',
  imports: [SoicalProfile],
  templateUrl: './social-app.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './social-app.scss',
})
export class SocialApp {}
