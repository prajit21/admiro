import { Component } from '@angular/core';

@Component({
  selector: 'app-soical-profile',
  templateUrl: './soical-profile.component.html',
  styleUrl: './soical-profile.component.scss'
})
export class SoicalProfileComponent {

  public active = 1;
  public openTab: string = "timeline";

  tab(value:string){
      this.openTab = value
  }

}
