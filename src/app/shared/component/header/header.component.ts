import { Component } from '@angular/core';
import { LanguageComponent } from './language/language.component';
import { NavmenuService } from '../../services/navmenu.service';
import { SearchComponent } from './search/search.component';
import { NotificationComponent } from './notification/notification.component';
import { CartComponent } from './cart/cart.component';
import { BookmarkComponent } from './bookmark/bookmark.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [LanguageComponent,SearchComponent,NotificationComponent,CartComponent,BookmarkComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {


  constructor(public navmenu: NavmenuService) {  }

  languageToggle() {
    this.navmenu.language = !this.navmenu.language;
  }


}
