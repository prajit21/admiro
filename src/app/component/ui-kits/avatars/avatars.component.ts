import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AvatarInitialComponent } from './avatar-initial/avatar-initial.component';
import { AvatarPingComponent } from './avatar-ping/avatar-ping.component';
import { GroupingComponent } from './grouping/grouping.component';
import { RatioComponent } from './ratio/ratio.component';
import { ShapesComponent } from './shapes/shapes.component';
import { SizesComponent } from './sizes/sizes.component';
import { StatusIndicatorComponent } from './status-indicator/status-indicator.component';
import { AvatarProfileComponent } from './avatar-profile/avatar-profile.component';

@Component({
    selector: 'app-avatars',
    imports: [CommonModule, AvatarInitialComponent, AvatarPingComponent, AvatarProfileComponent, GroupingComponent,
        RatioComponent, ShapesComponent, SizesComponent, StatusIndicatorComponent],
    templateUrl: './avatars.component.html',
    styleUrl: './avatars.component.scss'
})
export class AvatarsComponent {

}
