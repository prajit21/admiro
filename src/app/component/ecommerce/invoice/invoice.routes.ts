import { Routes } from '@angular/router';
import { Invoice1Component } from './invoice-1/invoice-1.component';
import { Invoice2Component } from './invoice-2/invoice-2.component';
import { Invoice3Component } from './invoice-3/invoice-3.component';
import { Invoice4Component } from './invoice-4/invoice-4.component';
import { Invoice5Component } from './invoice-5/invoice-5.component';
import { Invoice6Component } from './invoice-6/invoice-6.component';


export const Invoice: Routes = [
  {
    path: '',
    children: [
        {
            path: 'invoice1',
            component: Invoice1Component,
            data: {
                title: "Invoice",
                breadcrumb: "Invoice",
            }
        },
        {
            path: 'invoice2',
            component: Invoice2Component,
            data: {
                title: "Invoice",
                breadcrumb: "Invoice",
            }
        },
        {
            path: 'invoice3',
            component: Invoice3Component,
            data: {
              title: "Invoice",
              breadcrumb: "Invoice",
            }
          },
          {
            path: 'invoice4',
            component: Invoice4Component,
            data: {
              title: "Invoice",
              breadcrumb: "Invoice",
            }
          },
          {
            path: 'invoice5',
            component: Invoice5Component,
            data: {
              title: "Invoice",
              breadcrumb: "Invoice",
            }
          },
          {
            path: 'invoice6',
            component:Invoice6Component,
            data: {
              title: "Invoice",
              breadcrumb: "Invoice",
            }
          }
    ]
}
]