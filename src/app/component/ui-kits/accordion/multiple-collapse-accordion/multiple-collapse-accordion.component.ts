import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-multiple-collapse-accordion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './multiple-collapse-accordion.component.html',
  styleUrl: './multiple-collapse-accordion.component.scss'
})
export class MultipleCollapseAccordionComponent {

  public togglecollpese = false;
  public togglecollpese2 = false;
  public togglecollpese3 = false;

  onClick() {
    this.togglecollpese = !this.togglecollpese;
  }

  open() {
    this.togglecollpese2 = !this.togglecollpese2;
  }

  toggle() {
    this.togglecollpese = !this.togglecollpese;
    this.togglecollpese2 = !this.togglecollpese2;
  }

}
