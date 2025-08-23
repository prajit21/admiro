import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

import * as data from '../../../../../shared/data/social-media/social-media-data';

@Component({
  selector: 'app-hobbies-interests',
  imports: [CommonModule],
  templateUrl: './hobbies-interests.html',
  styleUrl: './hobbies-interests.scss',
})
export class HobbiesInterests {
  readonly data = input<data.hobbiesEduction>();
}
