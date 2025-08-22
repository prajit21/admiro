import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { UpcomingClass } from '../../../../shared/data/dashboard/education/education';
import { ClickOutsideDirective } from '../../../../shared/directives/outside.directive';

@Component({
    selector: 'app-upcoming-classes',
    imports: [CommonModule, ClickOutsideDirective],
    templateUrl: './upcoming-classes.html',
    styleUrl: './upcoming-classes.scss'
})
export class UpcomingClasses {

  public upCommingclasses = UpcomingClass;
  public isopen:boolean = false;

  open(){
   this.isopen = !this.isopen
  }

  clickOutside():void { 
    this.isopen = false;
  }

}
