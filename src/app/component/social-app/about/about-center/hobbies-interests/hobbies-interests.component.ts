import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import * as data from '../../../../../shared/data/social-media/social-media-data';


@Component({
    selector: 'app-hobbies-interests',
    imports: [CommonModule],
    templateUrl: './hobbies-interests.component.html',
    styleUrl: './hobbies-interests.component.scss'
})
export class HobbiesInterestsComponent {
  
  @Input() data: data.hobbiesEduction;

}
