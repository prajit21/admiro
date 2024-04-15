import { Component } from '@angular/core';
import { findCourse } from '../../../shared/data/learning/learning';

@Component({
  selector: 'app-learning-filter',
  templateUrl: './learning-filter.component.html',
  styleUrl: './learning-filter.component.scss'
})
export class LearningFilterComponent {

  public findCourse = findCourse;
  public isCollapsed : boolean = false;

  openFilter(){
    this.isCollapsed =! this.isCollapsed;
  }

  clickOutside():void { 
    this.isCollapsed= false;
  }

}
