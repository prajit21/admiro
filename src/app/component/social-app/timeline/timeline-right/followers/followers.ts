import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import * as data from '../../../../../shared/data/social-media/social-media-data';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-followers',
    imports: [CommonModule, NgbModule],
    templateUrl: './followers.html',
    styleUrl: './followers.scss'
})
export class Followers {

  public followersData = data.Followers;

}
