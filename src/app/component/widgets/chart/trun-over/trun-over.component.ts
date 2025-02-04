import { Turnover } from '../../../../shared/data/widgets/chart';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
    selector: 'app-trun-over',
    imports: [CommonModule, NgApexchartsModule],
    templateUrl: './trun-over.component.html',
    styleUrl: './trun-over.component.scss'
})
export class TrunOverComponent {

  public TurnOverChart = Turnover;

}
