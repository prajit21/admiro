import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AvatarInitial } from './avatar-initial/avatar-initial';
import { AvatarPing } from './avatar-ping/avatar-ping';
import { Grouping } from './grouping/grouping';
import { Ratio } from './ratio/ratio';
import { Shapes } from './shapes/shapes';
import { Sizes } from './sizes/sizes';
import { StatusIndicator } from './status-indicator/status-indicator';
import { AvatarProfile } from './avatar-profile/avatar-profile';

@Component({
    selector: 'app-avatars',
    imports: [CommonModule, AvatarInitial, AvatarPing, AvatarProfile, Grouping,
        Ratio, Shapes, Sizes, StatusIndicator],
    templateUrl: './avatars.html',
    styleUrl: './avatars.scss'
})
export class Avatars {

}
