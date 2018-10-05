import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReceptionistComponent } from '../assets/ts/receptionist.component';

import { AdminComponent } from '../assets/Admin/admin.component';
import { MenuItemComponent } from '../assets/Admin/ts/menu-item.component';
import { MenuComponent } from "../assets/Admin/ts/menu.component";
import { MenuItemAddComponent } from "../assets/Admin/ts/menu-item-add.component";
import { LoginComponent } from "../assets/Admin/ts/login.component";
import { TableComponent } from "../assets/Admin/ts/table.component";

import { OccupantMenuComponent } from '../assets/ts/occupant-menu.component';
import { LandingComponent } from '../assets/ts/landing.component';
import { OccupantOrderComponent } from '../assets/ts/occupant-order.component';
import { OrderComponent } from '../assets/Admin/ts/order.component';
import { FeedbackComponent } from '../assets/ts/feedback.component';
import { AdminGuard } from './core/authentication/admin.guard';

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "admin", component: AdminComponent, /*canActivate: [ AdminGuard ],*/
    children: [
      { path: "dashboard", component: MenuItemComponent },
      { path: "table", component: TableComponent },
      { path: "menu", component: MenuComponent },
      { path: "menu-item", component: MenuItemComponent },
      { path: "menu-item/add", component: MenuItemAddComponent },
      { path: "orders", component: OrderComponent }
    ]
  },
  { path: "menu", component: OccupantMenuComponent },
  { path: "order", component: OccupantOrderComponent },
  { path: "receptionist", component: ReceptionistComponent },
  { path: "feedback", component: FeedbackComponent },
  { path: "", component: LandingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    AdminGuard
  ]
})
export class AppRoutingModule { }
