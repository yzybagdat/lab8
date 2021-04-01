import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { GroupComponent } from './group.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {path: 'user', component: UserComponent},
  {path: 'group',component:GroupComponent},
  {path:'dashboard',component:DashboardComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
