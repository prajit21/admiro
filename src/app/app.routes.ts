import { Routes } from '@angular/router';
import { ContentComponent } from './shared/component/layout/content/content.component';
import { dashData } from './shared/routes/routes';
import { LoginComponent } from './auth/login/login.component';
import { AdminGuard } from './shared/guard/admin.guard';
import { FullComponent } from './shared/component/layout/full/full.component';
import { fullRoutes } from './shared/routes/full-routes';

export const routes: Routes = [
    {
        path: 'auth/login',
        component: LoginComponent
    },
    {
        path: '',
        redirectTo: '/dashboard/default',
        pathMatch: 'full'
    },
    {
        path: '',
        component: ContentComponent,
        children: dashData,
        canActivate: [AdminGuard],
    },
    {
        path: '',
        component: FullComponent,
        children: fullRoutes,
    },
];
