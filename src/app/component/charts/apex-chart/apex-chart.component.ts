import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ApexBarChartComponent } from './apex-bar-chart/apex-bar-chart.component';
import { ApexColumnChartComponent } from './apex-column-chart/apex-column-chart.component';
import { BasicAreaChartComponent } from './basic-area-chart/basic-area-chart.component';
import { BasicLineChartComponent } from './basic-line-chart/basic-line-chart.component';
import { BubbleChartComponent } from './bubble-chart/bubble-chart.component';
import { CandlestickChartComponent } from './candlestick-chart/candlestick-chart.component';
import { ColumnChartComponent } from './column-chart/column-chart.component';
import { DountChartComponent } from './dount-chart/dount-chart.component';
import { MixedChartComponent } from './mixed-chart/mixed-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { RadarChartComponent } from './radar-chart/radar-chart.component';
import { RadialChartComponent } from './radial-chart/radial-chart.component';
import { SteplineChartComponent } from './stepline-chart/stepline-chart.component';

@Component({
  selector: 'app-apex-chart',
  standalone: true,
  imports: [CommonModule, ApexBarChartComponent, ApexColumnChartComponent, BasicAreaChartComponent
    , BasicLineChartComponent, BubbleChartComponent, CandlestickChartComponent, ColumnChartComponent,
    DountChartComponent, MixedChartComponent, PieChartComponent, RadarChartComponent, RadialChartComponent,
    SteplineChartComponent],
  templateUrl: './apex-chart.component.html',
  styleUrl: './apex-chart.component.scss'
})
export class ApexChartComponent {

} 
