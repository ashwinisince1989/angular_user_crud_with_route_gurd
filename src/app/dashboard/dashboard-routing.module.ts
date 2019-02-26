import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from '../dashboard/dashboard.component';
import { AuthGuard } from '../_guards';

const appRoutes: Routes = [
 {
  path: '',
  component: DashboardComponent,
  children :[{
      path:'dashboard',
      component: DashboardComponent
  },
  {
      path: 'users',
      loadChildren: '../users/users.module#UsersModule'
  }],
   canActivate: [AuthGuard]
 }];

export const dashboardRouting = RouterModule.forRoot(appRoutes);
