import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AvatarInitial } from '../../../../shared/data/ui-kits/avavtar';

@Component({
    selector: 'app-avatar-initial',
    imports: [CommonModule],
    templateUrl: './avatar-initial.component.html',
    styleUrl: './avatar-initial.component.scss'
})
export class AvatarInitialComponent {

  public avatarIntial = AvatarInitial

}
