import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { newsupdate } from '../../../../shared/data/dashboard/default/default';
import { ClickOutsideDirective } from '../../../../shared/directives/outside.directive';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-news-update',
    imports: [CommonModule, ClickOutsideDirective, RouterModule],
    templateUrl: './news-update.component.html',
    styleUrl: './news-update.component.scss'
})
export class NewsUpdateComponent {

  public NewsUpdate = newsupdate;

  public show: boolean = false;

  open() {
    this.show = !this.show
  }

  clickOutside(): void {
    this.show = false
  }

}
