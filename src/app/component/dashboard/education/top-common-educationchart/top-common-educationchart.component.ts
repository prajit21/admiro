import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-top-common-educationchart',
  templateUrl: './top-common-educationchart.component.html',
  styleUrl: './top-common-educationchart.component.scss'
})
export class TopCommonEducationchartComponent {

  @Input() data: any

}
