import { Component } from '@angular/core';

@Component({
  selector: 'app-top-section',
  templateUrl: './top-section.component.html',
  styleUrl: './top-section.component.scss'
})
export class TopSectionComponent {

  public togglecollpese = false;

  toggle(){
    this.togglecollpese = !this.togglecollpese;
  }

}
