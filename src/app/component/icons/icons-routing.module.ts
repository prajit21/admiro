import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlagIconComponent } from './flag-icon/flag-icon.component';
import { FontAwesomeComponent } from './font-awesome/font-awesome.component';
import { FeatherIconComponent } from './feather-icon/feather-icon.component';
import { ThemifyIconComponent } from './themify-icon/themify-icon.component';
import { WeatherIconComponent } from './weather-icon/weather-icon.component';
import { IcoIconComponent } from './ico-icon/ico-icon.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'flag-icons',
        component: FlagIconComponent,
        data: {
          title: "Flag Icon",
          breadcrumb: "Flag Icon",
        }
      },
      {
        path: 'fontawesome-icons',
        component: FontAwesomeComponent,
        data: {
          title: "Font Awesome Icon",
          breadcrumb: "Font Awesome Icon",
        }
      },
      {
        path: 'feather-icons',
        component: FeatherIconComponent,
        data: {
          title: "Feather Icon",
          breadcrumb: "Feather Icon",
        }
      },
      {
        path: 'ico-icons',
        component: IcoIconComponent,
        data: {
          title: "ICO Icon",
          breadcrumb: "ICO Icon",
        }
      },
      {
        path: 'themify-icons',
        component: ThemifyIconComponent,
        data: {
          title: "Themify Icon",
          breadcrumb: "Themify Icon",
        }
      },
      {
        path: 'weather-icons',
        component: WeatherIconComponent,
        data: {
          title: "Weather Icon",
          breadcrumb: "Weather Icon",
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IconsRoutingModule { }
