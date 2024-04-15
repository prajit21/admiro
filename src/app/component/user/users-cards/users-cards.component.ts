import { Component, Input } from '@angular/core';
import { userCard } from '../../../shared/data/user/users-card';

@Component({
  selector: 'app-users-cards',
  templateUrl: './users-cards.component.html',
  styleUrl: './users-cards.component.scss'
})
export class UsersCardsComponent {

  public users = userCard;

}
