import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { userCard } from '../../../shared/data/user/users-card';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-users-cards',
    imports: [CommonModule, RouterModule],
    templateUrl: './users-cards.html',
    styleUrl: './users-cards.scss'
})
export class UsersCards {

  public users = userCard;

}
