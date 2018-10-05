import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReceptionistComponent } from '../assets/ts/receptionist.component';
import { OccupantMenuComponent } from '../assets/ts/occupant-menu.component';
import { LandingComponent } from '../assets/ts/landing.component';
import { OccupantOrderComponent } from '../assets/ts/occupant-order.component';
import { FeedbackComponent } from '../assets/ts/feedback.component';
import { AdminGuard } from './core/authentication/admin.guard';

import { AdminModule } from './modules/admin/admin.module';

const routes: Routes = [
  { path: 'admin', loadChildren: () => AdminModule },
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
