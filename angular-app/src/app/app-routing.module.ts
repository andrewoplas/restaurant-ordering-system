import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from '../assets/Admin/admin.component';
import { LoginComponent } from '@admin/login.component';
import { ReceptionistComponent } from '@occupant/receptionist.component';
import { OccupantMenuComponent } from '@occupant/occupant-menu.component';
import { LandingComponent } from '@occupant/landing.component';
import { OccupantOrderComponent } from '@occupant/occupant-order.component';
import { FeedbackComponent } from '@occupant/feedback.component';
import { AdminGuard } from './core/authentication/admin.guard';

import { AdminModule } from './modules/admin/admin.module';
import { DishDetailsComponent } from '@occupant/dish-details.component';
import { WaitingComponent } from '@occupant/waiting.component';
import { OccupantLoginComponent } from '@occupant/occupant-login.component';


const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: 'admin', component: AdminComponent, loadChildren: () => AdminModule, canActivate: [AdminGuard]},
  { path: 'menu', component: OccupantMenuComponent },
  { path: 'menu/:id', component: DishDetailsComponent },
  { path: 'order', component: OccupantOrderComponent },
  { path: 'receptionist', component: ReceptionistComponent },
  { path: 'feedback', component: FeedbackComponent },
  { path: 'waiting', component: WaitingComponent },
  { path: 'occupant', component: OccupantLoginComponent },
  { path: '', component: LandingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    AdminGuard
  ]
})
export class AppRoutingModule { }
