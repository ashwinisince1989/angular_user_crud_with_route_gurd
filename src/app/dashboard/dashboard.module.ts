import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { dashboardRouting} from '../dashboard/dashboard-routing.module';
import { UsersModule } from '../dashboard/users/users.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    dashboardRouting,
    UsersModule
  ]
})
export class DashboardModule { }
