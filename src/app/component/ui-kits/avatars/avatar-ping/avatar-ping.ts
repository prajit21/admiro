import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { AvatarPings } from '../../../../shared/data/ui-kits/avavtar';

@Component({
  selector: 'app-avatar-ping',
  imports: [CommonModule],
  templateUrl: './avatar-ping.html',
  styleUrl: './avatar-ping.scss',
})
export class AvatarPing {
  public avatarPing = AvatarPings;
}
