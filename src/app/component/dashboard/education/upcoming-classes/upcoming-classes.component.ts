import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { UpcomingClasses } from '../../../../shared/data/dashboard/education/education';
import { ClickOutsideDirective } from '../../../../shared/directives/outside.directive';

@Component({
    selector: 'app-upcoming-classes',
    imports: [CommonModule, ClickOutsideDirective],
    templateUrl: './upcoming-classes.component.html',
    styleUrl: './upcoming-classes.component.scss'
})
export class UpcomingClassesComponent {

  public upCommingclasses = UpcomingClasses;
  public isopen:boolean = false;

  open(){
   this.isopen = !this.isopen
  }

  clickOutside():void { 
    this.isopen = false;
  }

}
