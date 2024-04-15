import { Component } from '@angular/core';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrl: './bookmarks.component.scss'
})
export class BookmarksComponent {

  public activeTab: string;

  getTab(value: string){
    this.activeTab = value;
  }

}
