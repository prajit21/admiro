import { Component, ChangeDetectionStrategy } from '@angular/core';

import { AvatarPings } from '../../../../shared/data/ui-kits/avavtar';

@Component({
  selector: 'app-avatar-ping',
  imports: [],
  templateUrl: './avatar-ping.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './avatar-ping.scss',
})
export class AvatarPing {
  public avatarPing = AvatarPings;
}
