import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AdvancedSmilAnimationsComponent } from './advanced-smil-animations/advanced-smil-animations.component';
import { BiPolarBarChartComponent } from './bi-polar-bar-chart/bi-polar-bar-chart.component';
import { BiPolarLineComponent } from './bi-polar-line/bi-polar-line.component';
import { DountSvgAnimateComponent } from './dount-svg-animate/dount-svg-animate.component';
import { ExtremeResponsiveConfigurationComponent } from './extreme-responsive-configuration/extreme-responsive-configuration.component';
import { FilledHolesInDataComponent } from './filled-holes-in-data/filled-holes-in-data.component';
import { HorizontalBarChartComponent } from './horizontal-bar-chart/horizontal-bar-chart.component';
import { LineAreaChartComponent } from './line-area-chart/line-area-chart.component';
import { LinesChartComponent } from './lines-chart/lines-chart.component';
import { StackedBarChartComponent } from './stacked-bar-chart/stacked-bar-chart.component';
import { SvgPathAnimationComponent } from './svg-path-animation/svg-path-animation.component';
import { HolesInDataComponent } from './holes-in-data/holes-in-data.component';

@Component({
  selector: 'app-chartist-chart',
  standalone: true,
  imports: [CommonModule, AdvancedSmilAnimationsComponent, BiPolarBarChartComponent, BiPolarLineComponent,
    DountSvgAnimateComponent, ExtremeResponsiveConfigurationComponent, FilledHolesInDataComponent, HolesInDataComponent
    , HorizontalBarChartComponent, LineAreaChartComponent, LinesChartComponent, StackedBarChartComponent, SvgPathAnimationComponent
  ],
  templateUrl: './chartist-chart.component.html',
  styleUrl: './chartist-chart.component.scss'
})
export class ChartistChartComponent {

}
