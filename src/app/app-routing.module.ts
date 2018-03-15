import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserListComponent } from './user-list/user-list.component';
import { ChatHistoryComponent } from './chat-history/chat-history.component';
import { AuthguardGuard } from './authguard.guard';
const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'userList',
    canActivate: [AuthguardGuard],
    component: UserListComponent
  },
  {
    path: 'chatHistory/:id',
    canActivate: [AuthguardGuard],
    component: ChatHistoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
