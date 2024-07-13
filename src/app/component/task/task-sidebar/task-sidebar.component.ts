import { Component ,Output, EventEmitter } from '@angular/core';
import * as Data from '../../../shared/data/tasks/task-list';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddtaskTagComponent } from '../task-modal/addtask-tag/addtask-tag.component';
import { NewTaskComponent } from '../task-modal/new-task/new-task.component';
import { CommonModule } from '@angular/common';
import { ClickOutsideDirective } from '../../../shared/directives/outside.directive';
import { AllTaskComponent } from '../all-task/all-task.component';
import { FeathericonComponent } from '../../../shared/component/feathericon/feathericon.component';

@Component({
  selector: 'app-task-sidebar',
  standalone: true,
  imports: [CommonModule,ClickOutsideDirective,AllTaskComponent,FeathericonComponent],
  templateUrl: './task-sidebar.component.html',
  styleUrl: './task-sidebar.component.scss'
})
export class TaskSidebarComponent {


  @Output() selectedheading_id: number;
  @Output() selectedTagId: number;

  public taskSidemenu = Data.TaskData;
  public taskTagSidemenu = Data.TagData;
  public open: boolean = false;


  constructor(private modalService: NgbModal) { }
  
  getData(title_id: number) {
    const getHeadingData = this.taskSidemenu.filter((data) => {
      return data.title_id === title_id
    })
    this.selectedheading_id = getHeadingData[0].title_id
  }

  getTagData(title_id: number) {
    const getTagData = this.taskTagSidemenu.filter((data) => {
      return data.title_id === title_id
    })

    this.selectedTagId = getTagData[0].title_id
  }

  openMenu() {
    this.open = !this.open
  }

  openAddTask() {
    this.modalService.open(NewTaskComponent, { size: 'lg' })
  }

  openAddTag() {
    this.modalService.open(AddtaskTagComponent, { size: 'lg' })
  }
  
  clickOutside():void { 
    this.open = false;
  }
}
