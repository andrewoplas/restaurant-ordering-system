import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReceptionistComponent } from '../assets/ts/receptionist.component';

import { AdminComponent } from '../assets/Admin/admin.component';
import { AdminDisplayItemMenuComponent } from '../assets/Admin/ts/admin-display-item-menu.component';
import { LoginComponent } from "../assets/Admin/ts/login.component";

import { OccupantComponent } from '../assets/ts/occupant.component';
import { OccupantDishDetailsComponent } from '../assets/ts/occupant-dish-details.component';
import { OccupantMenuComponent } from '../assets/ts/occupant-menu.component';
import { LandingComponent } from '../assets/ts/landing.component';
import { OccupantOrderComponent } from '../assets/ts/occupant-order.component';

const routes: Routes = [
    {
      path: 'login',
      component: LoginComponent
    },
    {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: 'display-item-menu',
        component: AdminDisplayItemMenuComponent
      }
    ]
  },
  {
    path: 'occupant',
    component: OccupantComponent,
    children: [
      {
        path: 'menu',
        component: OccupantMenuComponent,
        children: [
          {
            path: 'dishdetails',
            component: OccupantDishDetailsComponent
          }
        ]
      }, {
        path: 'order',
        component: OccupantOrderComponent,
      }
    ]
  },
  {
    path: 'receptionist',
    component: ReceptionistComponent
  },
  {
    path: '',
    component: LandingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
