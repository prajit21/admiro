import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { ClickOutsideDirective } from '../../../../shared/directives/outside.directive';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
    selector: 'app-top-common-educationchart',
    imports: [CommonModule, ClickOutsideDirective, NgApexchartsModule],
    templateUrl: './top-common-educationchart.html',
    styleUrl: './top-common-educationchart.scss'
})
export class TopCommonEducationchart {

  readonly data = input<any>();

  public isopen:boolean = false;

  open(){
   this.isopen = !this.isopen
  }

  clickOutside():void { 
    this.isopen = false;
  }

}
