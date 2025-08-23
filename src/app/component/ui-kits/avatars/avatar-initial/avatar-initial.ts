import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { AvatarInitials } from '../../../../shared/data/ui-kits/avavtar';

@Component({
  selector: 'app-avatar-initial',
  imports: [CommonModule],
  templateUrl: './avatar-initial.html',
  styleUrl: './avatar-initial.scss',
})
export class AvatarInitial {
  public avatarIntial = AvatarInitials;
}
