import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReceptionistComponent } from '../assets/ts/receptionist.component';

import { AdminComponent } from '../assets/Admin/admin.component';
import { MenuItemComponent } from '../assets/Admin/ts/menu-item.component';
import { LoginComponent } from "../assets/Admin/ts/login.component";
import { TableComponent } from "../assets/Admin/ts/table.component";

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
        path: 'dashboard',
        component: MenuItemComponent
      },
      {
        path: 'table',
        component: TableComponent
      },
      {
        path: 'menu-item',
        component: MenuItemComponent
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
      }, 
      {
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
