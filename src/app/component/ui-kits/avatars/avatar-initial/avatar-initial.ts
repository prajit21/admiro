import { Component, ChangeDetectionStrategy } from '@angular/core';

import { AvatarInitials } from '../../../../shared/data/ui-kits/avavtar';

@Component({
  selector: 'app-avatar-initial',
  imports: [],
  templateUrl: './avatar-initial.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './avatar-initial.scss',
})
export class AvatarInitial {
  public avatarIntial = AvatarInitials;
}
