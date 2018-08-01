import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReceptionistComponent } from '../assets/ts/receptionist.component';
import { ReceptionistAssistanceComponent } from '../assets/ts/receptionist-assistance.component';
import { ReceptionistDineComponent } from '../assets/ts/receptionist-dine.component';
import { ReceptionistOrderComponent } from '../assets/ts/receptionist-order.component';

import { AdminComponent } from '../assets/Admin/admin.component';

import { OccupantComponent } from '../assets/ts/occupant.component';
import { OccupantDishDetailsComponent } from '../assets/ts/occupant-dish-details.component';
import { OccupantMenuComponent } from '../assets/ts/occupant-menu.component';
import { LandingComponent } from '../assets/ts/landing.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent
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
      }
    ]
  },
  {
    path: 'receptionist',
    component: ReceptionistComponent,
    children: [
      {
        path: 'assistance',
        component: ReceptionistAssistanceComponent
      },
      {
        path: 'order',
        component: ReceptionistOrderComponent
      },
      {
        path: 'dine',
        component: ReceptionistDineComponent
      }
    ]
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
