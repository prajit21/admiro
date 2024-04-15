import { Component } from '@angular/core';
import { AvatarPing } from '../../../../shared/data/ui-kits/avavtar';

@Component({
  selector: 'app-avatar-ping',
  templateUrl: './avatar-ping.component.html',
  styleUrl: './avatar-ping.component.scss'
})
export class AvatarPingComponent {

  public avatarPing = AvatarPing;

}
