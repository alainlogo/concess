import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  // {path: 'admin/dashboard', component: DashboardComponent },
  // {path: 'admin/dashboard/:id', component: DashboardComponent },
  { path: 'admin', loadChildren:() => import ('./admin/admin.module') .then (m => m.AdminModule)},

  {path: 'home', component: HomeComponent },

  // CES DEUX CHEMEIN DOIT ETRE MISENT EN DERNIER
  {path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: '**', redirectTo: 'home'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
