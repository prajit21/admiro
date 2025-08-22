import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SkillStatusChart } from './../../../../shared/data/widgets/chart';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
    selector: 'app-skill-status',
    imports: [CommonModule, NgApexchartsModule],
    templateUrl: './skill-status.html',
    styleUrl: './skill-status.scss'
})
export class SkillStatus {

  public skillstauschart = SkillStatusChart;
  
}
