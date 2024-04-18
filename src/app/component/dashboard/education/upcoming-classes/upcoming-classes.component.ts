import { Component } from '@angular/core';
import { UpcomingClasses } from '../../../../shared/data/dashboard/education/education';

@Component({
  selector: 'app-upcoming-classes',
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
