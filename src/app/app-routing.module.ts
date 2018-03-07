import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserListComponent } from './user-list/user-list.component';
import { ChatHistoryComponent } from './chat-history/chat-history.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'userList',
    component: UserListComponent
  },
  {
    path: 'chatHistory/:id',
    component: ChatHistoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
