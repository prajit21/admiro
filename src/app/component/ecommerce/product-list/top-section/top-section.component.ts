import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FeathericonComponent } from '../../../../shared/component/feathericon/feathericon.component';

@Component({
  selector: 'app-top-section',
  standalone: true,
  imports: [CommonModule,RouterModule,FeathericonComponent],
  templateUrl: './top-section.component.html',
  styleUrl: './top-section.component.scss'
})
export class TopSectionComponent {

  public togglecollpese = false;

  toggle(){
    this.togglecollpese = !this.togglecollpese;
  }

}
