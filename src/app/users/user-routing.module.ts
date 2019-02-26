import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from '../users/users.component';

const userRoutes: Routes = [
 {
  path: '',
  component: UsersComponent,
  children :[{
      path:'user',
      component: UsersComponent
  }]
 }];

export const userRouting = RouterModule.forRoot(userRoutes);
