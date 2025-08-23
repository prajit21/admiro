import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

import * as data from '../../../../../shared/data/social-media/social-media-data';

@Component({
  selector: 'app-common-add-friends',
  imports: [CommonModule],
  templateUrl: './common-add-friends.html',
  styleUrl: './common-add-friends.scss',
})
export class CommonAddFriends {
  readonly data = input<data.addFriends>();
}
