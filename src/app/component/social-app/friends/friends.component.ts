import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { UsersCardsComponent } from '../../user/users-cards/users-cards.component';

@Component({
    selector: 'app-friends',
    imports: [CommonModule, UsersCardsComponent],
    templateUrl: './friends.component.html',
    styleUrl: './friends.component.scss'
})
export class FriendsComponent {

}
