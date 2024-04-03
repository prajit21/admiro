import { Routes } from '@angular/router';

export const dashData: Routes = [
    {
        path: 'dashboard',
        data: {
            title: "Default",
            breadcrumb: "Dashboard",
        },
        loadChildren: () => import('../../../app/component/dashboard/dashboard.routes').then(r => r.dashboard)
    },
]