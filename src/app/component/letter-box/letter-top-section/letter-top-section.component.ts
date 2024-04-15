import { Component } from '@angular/core';

@Component({
  selector: 'app-letter-top-section',
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
