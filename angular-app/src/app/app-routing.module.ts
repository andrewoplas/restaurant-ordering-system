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
import { OccupantGuard } from './core/authentication/occupant.guard';


const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: 'admin', component: AdminComponent, loadChildren: () => AdminModule, canActivate: [AdminGuard]},
  { path: 'menu', component: OccupantMenuComponent, canActivate: [OccupantGuard]},
  { path: 'menu/:id', component: DishDetailsComponent, canActivate: [OccupantGuard]},
  { path: 'order', component: OccupantOrderComponent, canActivate: [OccupantGuard]},
  { path: 'receptionist', component: ReceptionistComponent, canActivate: [OccupantGuard]},
  { path: 'feedback', component: FeedbackComponent, canActivate: [OccupantGuard]},
  { path: 'waiting', component: WaitingComponent, canActivate: [OccupantGuard]},
  { path: 'occupant', component: OccupantLoginComponent },
  { path: '', component: LandingComponent, canActivate: [OccupantGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    AdminGuard,
    OccupantGuard
  ]
})
export class AppRoutingModule { }
