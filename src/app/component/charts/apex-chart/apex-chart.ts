import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { ApexBarChart } from './apex-bar-chart/apex-bar-chart';
import { ApexColumnChart } from './apex-column-chart/apex-column-chart';
import { BasicAreaChart } from './basic-area-chart/basic-area-chart';
import { BasicLineChart } from './basic-line-chart/basic-line-chart';
import { BubbleChart } from './bubble-chart/bubble-chart';
import { CandlestickChart } from './candlestick-chart/candlestick-chart';
import { ColumnChart } from './column-chart/column-chart';
import { DountChart } from './dount-chart/dount-chart';
import { MixedChart } from './mixed-chart/mixed-chart';
import { PieChart } from './pie-chart/pie-chart';
import { RadarChart } from './radar-chart/radar-chart';
import { RadialChart } from './radial-chart/radial-chart';
import { SteplineChart } from './stepline-chart/stepline-chart';

@Component({
  selector: 'app-apex-chart',
  imports: [
    CommonModule,
    ApexBarChart,
    ApexColumnChart,
    BasicAreaChart,
    BasicLineChart,
    BubbleChart,
    CandlestickChart,
    ColumnChart,
    DountChart,
    MixedChart,
    PieChart,
    RadarChart,
    RadialChart,
    SteplineChart,
  ],
  templateUrl: './apex-chart.html',
  styleUrl: './apex-chart.scss',
})
export class ApexChart {}
