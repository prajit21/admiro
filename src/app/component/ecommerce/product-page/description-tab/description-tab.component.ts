import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-description-tab',
    imports: [CommonModule],
    templateUrl: './description-tab.component.html',
    styleUrl: './description-tab.component.scss'
})
export class DescriptionTabComponent {

  public openTab: string = "febric";

  public tabbed(val: string) {
    this.openTab = val
  }

}
