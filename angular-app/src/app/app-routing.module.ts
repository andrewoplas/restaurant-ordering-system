import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from '@admin/login.component';
import { ReceptionistComponent } from '@occupant/receptionist.component';
import { OccupantMenuComponent } from '@occupant/occupant-menu.component';
import { LandingComponent } from '@occupant/landing.component';
import { OccupantOrderComponent } from '@occupant/occupant-order.component';
import { FeedbackComponent } from '@occupant/feedback.component';
import { AdminGuard } from './core/authentication/admin.guard';

import { AdminModule } from './modules/admin/admin.module';

const routes: Routes = [
  { path: 'admin', loadChildren: () => AdminModule },
  { path: "login", component: LoginComponent },
  { path: 'menu', component: OccupantMenuComponent },
  { path: 'order', component: OccupantOrderComponent },
  { path: 'receptionist', component: ReceptionistComponent },
  { path: 'feedback', component: FeedbackComponent },
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
