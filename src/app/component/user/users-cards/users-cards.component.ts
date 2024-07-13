import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { userCard } from '../../../shared/data/user/users-card';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-users-cards',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './users-cards.component.html',
  styleUrl: './users-cards.component.scss'
})
export class UsersCardsComponent {

  public users = userCard;

}
