import { Routes } from '@angular/router';
import { ContentComponent } from './shared/component/layout/content/content.component';
import { dashData } from './shared/routes/routes';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/dashboard/default',
        pathMatch: 'full'
    },
    {
        path: '',
        component: ContentComponent,
        children: dashData,
    }
];
