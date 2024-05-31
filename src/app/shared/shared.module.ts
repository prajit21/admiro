import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './component/header/header.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { FooterComponent } from './component/footer/footer.component';
import { BreadcrumbComponent } from './component/breadcrumb/breadcrumb.component';
import { ContentComponent } from './component/layout/content/content.component';
import { FeathericonComponent } from './component/feathericon/feathericon.component';
import { SvgIconComponent } from './component/svg-icon/svg-icon.component';
import { BookmarkComponent } from './component/header/bookmark/bookmark.component';
import { NotificationComponent } from './component/header/notification/notification.component';
import { SearchComponent } from './component/header/search/search.component';
import { CartComponent } from './component/header/cart/cart.component';
import { ThemeComponent } from './component/header/theme/theme.component';
import { CustomizerComponent } from './component/customizer/customizer.component';
import { FullComponent } from './component/layout/full/full.component';
import { ColorPickerComponent } from './component/customizer/color-picker/color-picker.component';
import { ThemeModeComponent } from './component/customizer/theme-mode/theme-mode.component';
import { SidebarTypeComponent } from './component/customizer/sidebar-type/sidebar-type.component';
import { SidebarIconComponent } from './component/customizer/sidebar-icon/sidebar-icon.component';
import { LayoutTypeComponent } from './component/customizer/layout-type/layout-type.component';
import { LoaderComponent } from './component/loader/loader.component';
import { LanguageComponent } from './component/header/language/language.component';
import { TapToTopComponent } from './component/tap-to-top/tap-to-top.component';

import { ClickOutsideDirective } from './directives/outside.directive';
import { ProfileComponent } from './component/header/profile/profile.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    BreadcrumbComponent,
    ContentComponent,
    FeathericonComponent,
    SvgIconComponent,
    BookmarkComponent,
    NotificationComponent,
    SearchComponent,
    CartComponent,
    ThemeComponent,
    CustomizerComponent,
    ClickOutsideDirective,
    FullComponent,
    ColorPickerComponent,
    ThemeModeComponent,
    SidebarTypeComponent,
    SidebarIconComponent,
    LayoutTypeComponent,
    LoaderComponent,
    LanguageComponent,
    TapToTopComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    FormsModule,
    TranslateModule.forRoot(),
  ],
  exports: [
    ContentComponent,
    FeathericonComponent,
    SvgIconComponent,
    LoaderComponent,
    TapToTopComponent,
    ClickOutsideDirective,
    NgbModule,
  ]
})
export class SharedModule { }
