import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-top-common-educationchart',
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
