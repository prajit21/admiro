import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { bookmark } from '../../../shared/data/bookmark/bookmarks';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddTagComponent } from '../bookmark-modal/add-tag/add-tag.component';
import { NewBookmarkComponent } from '../bookmark-modal/new-bookmark/new-bookmark.component';
import { ClickOutsideDirective } from '../../../shared/directives/outside.directive';
import { FeathericonComponent } from '../../../shared/component/feathericon/feathericon.component';

@Component({
    selector: 'app-bookmark-sidemenu',
    imports: [CommonModule, ClickOutsideDirective, FeathericonComponent],
    templateUrl: './bookmark-sidemenu.component.html',
    styleUrl: './bookmark-sidemenu.component.scss'
})
export class BookmarkSidemenuComponent {

  @Output() activeTabValue = new EventEmitter<string>();

  public bookmark = bookmark;

  public activeTab: string = 'created_by_me';
  public isOpen: boolean = false;

  constructor(private modal: NgbModal){}

  ngOnInit(){
    this.activeTabValue.emit(this.activeTab);
  }

  changeTab(value: string){
    this.activeTab = value;
    this.activeTabValue.emit(this.activeTab);
  }

  openModal(value: string){
    if(value == 'add_bookmark'){
      this.modal.open(NewBookmarkComponent, { size: 'lg'})
    }else if(value == 'add_tag'){
      this.modal.open(AddTagComponent, { size: 'lg',})
    }
  }

  openFilter(){
    this.isOpen =! this.isOpen;
  }

  clickOutside(): void {
    this.isOpen = false
  }

}
