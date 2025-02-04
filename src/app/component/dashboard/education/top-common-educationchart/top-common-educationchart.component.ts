import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ClickOutsideDirective } from '../../../../shared/directives/outside.directive';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
    selector: 'app-top-common-educationchart',
    imports: [CommonModule, ClickOutsideDirective, NgApexchartsModule],
    templateUrl: './top-common-educationchart.component.html',
    styleUrl: './top-common-educationchart.component.scss'
})
export class TopCommonEducationchartComponent {

  @Input() data: any

  public isopen:boolean = false;

  open(){
   this.isopen = !this.isopen
  }

  clickOutside():void { 
    this.isopen = false;
  }

}
