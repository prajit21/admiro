import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NgChartsModule } from 'ng2-charts';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { ChartistModule } from 'ng-chartist';
import { SharedModule } from '../../shared/shared.module';
import { ChartsRoutingModule } from './charts-routing.module';

import { ApexChartComponent } from './apex-chart/apex-chart.component';
import { ChartistChartComponent } from './chartist-chart/chartist-chart.component';
import { ChartjsChartComponent } from './chartjs-chart/chartjs-chart.component';
import { BasicLineChartComponent } from './apex-chart/basic-line-chart/basic-line-chart.component';
import { BasicAreaChartComponent } from './apex-chart/basic-area-chart/basic-area-chart.component';
import { DumbbellChartComponent } from './apex-chart/dumbbell-chart/dumbbell-chart.component';
import { ColumnChartComponent } from './apex-chart/column-chart/column-chart.component';
import { MixedChartComponent } from './apex-chart/mixed-chart/mixed-chart.component';
import { PyramidChartComponent } from './apex-chart/pyramid-chart/pyramid-chart.component';
import { BubbleChartComponent } from './apex-chart/bubble-chart/bubble-chart.component';
import { PolarChartComponent } from './apex-chart/polar-chart/polar-chart.component';
import { CandlestickChartComponent } from './apex-chart/candlestick-chart/candlestick-chart.component';
import { PieChartComponent } from './apex-chart/pie-chart/pie-chart.component';
import { DountChartComponent } from './apex-chart/dount-chart/dount-chart.component';
import { RadialChartComponent } from './apex-chart/radial-chart/radial-chart.component';
import { RadarChartComponent } from './apex-chart/radar-chart/radar-chart.component';
import { BasicBarChartComponent } from './chartjs-chart/basic-bar-chart/basic-bar-chart.component';
import { RadarGraphComponent } from './chartjs-chart/radar-graph/radar-graph.component';
import { RadarGraph2Component } from './chartjs-chart/radar-graph2/radar-graph2.component';
import { RadarGraph3Component } from './chartjs-chart/radar-graph3/radar-graph3.component';
import { DonutGraphComponent } from './chartjs-chart/donut-graph/donut-graph.component';
import { BasicLinesChartComponent } from './chartjs-chart/basic-lines-chart/basic-lines-chart.component';
import { AdvancedSmilAnimationsComponent } from './chartist-chart/advanced-smil-animations/advanced-smil-animations.component';
import { LinesChartComponent } from './chartist-chart/lines-chart/lines-chart.component';
import { DountSvgAnimateComponent } from './chartist-chart/dount-svg-animate/dount-svg-animate.component';
import { BiPolarLineComponent } from './chartist-chart/bi-polar-line/bi-polar-line.component';
import { LineAreaChartComponent } from './chartist-chart/line-area-chart/line-area-chart.component';
import { BiPolarBarChartComponent } from './chartist-chart/bi-polar-bar-chart/bi-polar-bar-chart.component';
import { StackedBarChartComponent } from './chartist-chart/stacked-bar-chart/stacked-bar-chart.component';
import { HorizontalBarChartComponent } from './chartist-chart/horizontal-bar-chart/horizontal-bar-chart.component';
import { ExtremeResponsiveConfigurationComponent } from './chartist-chart/extreme-responsive-configuration/extreme-responsive-configuration.component';
import { HolesInDataComponent } from './chartist-chart/holes-in-data/holes-in-data.component';
import { FilledHolesInDataComponent } from './chartist-chart/filled-holes-in-data/filled-holes-in-data.component';
import { GoogleChartComponent } from './google-chart/google-chart.component';
import { AreaChart1Component } from './google-chart/area-chart-1/area-chart-1.component';
import { AreaChart2Component } from './google-chart/area-chart-2/area-chart-2.component';
import { ColumnChart2Component } from './google-chart/column-chart-2/column-chart-2.component';
import { ColumnChart1Component } from './google-chart/column-chart-1/column-chart-1.component';
import { GoogleLineChartComponent } from './google-chart/google-line-chart/google-line-chart.component';
import { ComboChartComponent } from './google-chart/combo-chart/combo-chart.component';
import { BarChart2Component } from './google-chart/bar-chart-2/bar-chart-2.component';
import { PieChart1Component } from './google-chart/pie-chart-1/pie-chart-1.component';
import { PieChart2Component } from './google-chart/pie-chart-2/pie-chart-2.component';
import { PieChart3Component } from './google-chart/pie-chart-3/pie-chart-3.component';
import { PieChart4Component } from './google-chart/pie-chart-4/pie-chart-4.component';
import { SvgPathAnimationComponent } from './chartist-chart/svg-path-animation/svg-path-animation.component';

@NgModule({
  declarations: [
    ApexChartComponent,
    ChartistChartComponent,
    ChartjsChartComponent,
    BasicLineChartComponent,
    BasicAreaChartComponent,
    DumbbellChartComponent,
    ColumnChartComponent,
    MixedChartComponent,
    PyramidChartComponent,
    BubbleChartComponent,
    PolarChartComponent,
    CandlestickChartComponent,
    PieChartComponent,
    DountChartComponent,
    RadialChartComponent,
    RadarChartComponent,
    BasicBarChartComponent,
    RadarGraphComponent,
    RadarGraph2Component,
    RadarGraph3Component,
    DonutGraphComponent,
    BasicLinesChartComponent,
    AdvancedSmilAnimationsComponent,
    LinesChartComponent,
    DountSvgAnimateComponent,
    BiPolarLineComponent,
    LineAreaChartComponent,
    BiPolarBarChartComponent,
    StackedBarChartComponent,
    HorizontalBarChartComponent,
    ExtremeResponsiveConfigurationComponent,
    HolesInDataComponent,
    FilledHolesInDataComponent,
    GoogleChartComponent,
    AreaChart1Component,
    AreaChart2Component,
    ColumnChart2Component,
    ColumnChart1Component,
    GoogleLineChartComponent,
    ComboChartComponent,
    BarChart2Component,
    PieChart1Component,
    PieChart2Component,
    PieChart3Component,
    PieChart4Component,
    SvgPathAnimationComponent,
  
  ],
  imports: [
    CommonModule,
    ChartsRoutingModule,
    SharedModule,
    NgApexchartsModule ,
    NgChartsModule,
    ChartistModule,
    Ng2GoogleChartsModule
  ]
})
export class ChartsModule { }
