import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BookmarkDataComponent } from './bookmark-data/bookmark-data.component';
import { BookmarkSidemenuComponent } from './bookmark-sidemenu/bookmark-sidemenu.component';

@Component({
    selector: 'app-bookmarks',
    imports: [CommonModule, BookmarkDataComponent, BookmarkSidemenuComponent],
    templateUrl: './bookmarks.component.html',
    styleUrl: './bookmarks.component.scss'
})
export class BookmarksComponent {

  public activeTab: string;

  getTab(value: string){
    this.activeTab = value;
  }

}
