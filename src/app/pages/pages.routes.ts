import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';


const pagesRoutes: Routes =  [
{
    path: '',
    component: PagesComponent,
    children: [
        { path: 'escritorio', component: DashboardComponent },
        { path: 'progreso', component: ProgressComponent },
        { path: 'graficas', component: Graficas1Component },
        { path: 'configuraciones', component: AccountSettingsComponent},
        { path: '', redirectTo: '/escritorio', pathMatch: 'full'}
    ]
}

];

export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
