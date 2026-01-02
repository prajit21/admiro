import { Component } from '@angular/core';

import { AvatarInitials } from '../../../../shared/data/ui-kits/avavtar';

@Component({
  selector: 'app-avatar-initial',
  imports: [],
  templateUrl: './avatar-initial.html',
  styleUrl: './avatar-initial.scss',
})
export class AvatarInitial {
  public avatarIntial = AvatarInitials;
}
