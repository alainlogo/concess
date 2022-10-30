import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";


const routes : Routes = [
  { path: 'admin', loadChildren:() => import ('./admin.module') .then (m => m.AdminModule)},
  { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  { path: '**', redirectTo: 'dashboard'},
]
@NgModule({
  // precicer que c'est des routes enfanyts
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})

export class AdminRoutingModule { }
