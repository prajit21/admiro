import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AreaChart1Component } from './area-chart-1/area-chart-1.component';
import { AreaChart2Component } from './area-chart-2/area-chart-2.component';
import { BarChart2Component } from './bar-chart-2/bar-chart-2.component';
import { ColumnChart1Component } from './column-chart-1/column-chart-1.component';
import { ColumnChart2Component } from './column-chart-2/column-chart-2.component';
import { ComboChartComponent } from './combo-chart/combo-chart.component';
import { GoogleLineChartComponent } from './google-line-chart/google-line-chart.component';
import { PieChart1Component } from './pie-chart-1/pie-chart-1.component';
import { PieChart2Component } from './pie-chart-2/pie-chart-2.component';
import { PieChart3Component } from './pie-chart-3/pie-chart-3.component';
import { PieChart4Component } from './pie-chart-4/pie-chart-4.component';

@Component({
  selector: 'app-google-chart',
  standalone: true,
  imports: [CommonModule, AreaChart1Component, AreaChart2Component, BarChart2Component
    , ColumnChart1Component, ColumnChart2Component, ComboChartComponent, GoogleLineChartComponent, PieChart1Component
    , PieChart2Component, PieChart3Component, PieChart4Component],
  templateUrl: './google-chart.component.html',
  styleUrl: './google-chart.component.scss'
})
export class GoogleChartComponent {

}
