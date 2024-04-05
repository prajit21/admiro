import { Component, Input } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'app-top-common-educationchart',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './top-common-educationchart.component.html',
  styleUrl: './top-common-educationchart.component.scss'
})
export class TopCommonEducationchartComponent {

  @Input() data: any

}
