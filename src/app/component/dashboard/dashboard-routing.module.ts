import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './default/default.component';
import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { EducationComponent } from './education/education.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'default',
        component: DefaultComponent,
        data: {
          title: 'Default Dashboard',
          breadcrumb: 'Default',
          des:'Welcome back! Let’s start from where you left'
        },
      },
      {
        path: 'ecommerce',
        component: EcommerceComponent,
        data: {
          title: 'Ecommerce Dashboard',
          breadcrumb: 'Ecommerce Dashboard',
          des:'"Welcome back! Continue your journey."'
        }
      },
      {
        path: 'education',
        component: EducationComponent,
        data: {
          title: 'Education Dashboard',
          breadcrumb: 'Education',
          des:'"Welcome back to your educational adventure!"'
        },
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
