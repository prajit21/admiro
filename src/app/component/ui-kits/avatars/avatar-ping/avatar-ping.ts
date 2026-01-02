import { Component } from '@angular/core';

import { AvatarPings } from '../../../../shared/data/ui-kits/avavtar';

@Component({
  selector: 'app-avatar-ping',
  imports: [],
  templateUrl: './avatar-ping.html',
  styleUrl: './avatar-ping.scss',
})
export class AvatarPing {
  public avatarPing = AvatarPings;
}
