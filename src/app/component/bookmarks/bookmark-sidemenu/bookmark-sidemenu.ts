import { CommonModule } from '@angular/common';
import { Component, output, inject } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Feathericon } from '../../../shared/component/feathericon/feathericon';
import { bookmark } from '../../../shared/data/bookmark/bookmarks';
import { ClickOutsideDirective } from '../../../shared/directives/outside.directive';
import { AddTag } from '../bookmark-modal/add-tag/add-tag';
import { NewBookmark } from '../bookmark-modal/new-bookmark/new-bookmark';

@Component({
  selector: 'app-bookmark-sidemenu',
  imports: [CommonModule, ClickOutsideDirective, Feathericon],
  templateUrl: './bookmark-sidemenu.html',
  styleUrl: './bookmark-sidemenu.scss',
})
export class BookmarkSidemenu {
  readonly activeTabValue = output<string>();

  public bookmark = bookmark;

  public activeTab: string = 'created_by_me';
  public isOpen: boolean = false;

  private modal = inject(NgbModal);

  ngOnInit() {
    this.activeTabValue.emit(this.activeTab);
  }

  changeTab(value: string) {
    this.activeTab = value;
    this.activeTabValue.emit(this.activeTab);
  }

  openModal(value: string) {
    if (value == 'add_bookmark') {
      this.modal.open(NewBookmark, { size: 'lg' });
    } else if (value == 'add_tag') {
      this.modal.open(AddTag, { size: 'lg' });
    }
  }

  openFilter() {
    this.isOpen = !this.isOpen;
  }

  clickOutside(): void {
    this.isOpen = false;
  }
}
