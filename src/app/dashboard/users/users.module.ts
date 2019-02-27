import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent} from '../users/users.component';
import { userRouting} from '../users/user-routing.module';

@NgModule({
  declarations: [UsersComponent],
  imports: [
    CommonModule,
    userRouting
  ]
})
export class UsersModule { }
