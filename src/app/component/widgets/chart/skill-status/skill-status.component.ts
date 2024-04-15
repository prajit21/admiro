import { Component } from '@angular/core';
import { SkillStatus } from './../../../../shared/data/widgets/chart';

@Component({
  selector: 'app-skill-status',
  templateUrl: './skill-status.component.html',
  styleUrl: './skill-status.component.scss'
})
export class SkillStatusComponent {

  public skillstauschart = SkillStatus;
  
}
