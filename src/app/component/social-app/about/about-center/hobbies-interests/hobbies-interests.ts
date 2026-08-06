import { Component, input, ChangeDetectionStrategy } from '@angular/core';

import * as data from '../../../../../shared/data/social-media/social-media-data';

@Component({
  selector: 'app-hobbies-interests',
  imports: [],
  templateUrl: './hobbies-interests.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './hobbies-interests.scss',
})
export class HobbiesInterests {
  readonly data = input<data.hobbiesEduction>();
}
