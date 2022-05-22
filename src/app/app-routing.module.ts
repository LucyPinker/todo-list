import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { ListManagerComponent } from './list-manager/list-manager.component';

const routes: Routes = [
  { path: 'admin', component: ListManagerComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
