import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from '../dashboard/dashboard.component';
import { AuthGuard } from '../_guards';

import { UsersModule } from '../dashboard/users/users.module'

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
      loadChildren:() => UsersModule
  }],
   canActivate: [AuthGuard]
 }];

export const dashboardRouting = RouterModule.forChild(appRoutes);
