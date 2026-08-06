import { Component, ChangeDetectionStrategy } from '@angular/core';

import { UsersCards } from '../../user/users-cards/users-cards';

@Component({
  selector: 'app-friends',
  imports: [UsersCards],
  templateUrl: './friends.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './friends.scss',
})
export class Friends {}
