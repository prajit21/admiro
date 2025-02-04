import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ClickOutsideDirective } from '../../../shared/directives/outside.directive';
import { FeathericonComponent } from '../../../shared/component/feathericon/feathericon.component';

@Component({
    selector: 'app-letter-top-section',
    imports: [CommonModule, NgbModule, ClickOutsideDirective, FeathericonComponent],
    templateUrl: './letter-top-section.component.html',
    styleUrl: './letter-top-section.component.scss'
})
export class LetterTopSectionComponent {

  public active = 1;
  public isOpen: boolean = false;

  openMenu() {
    this.isOpen = !this.isOpen;
  }

  clickOutside():void { 
    this.isOpen = false;
  }

}
