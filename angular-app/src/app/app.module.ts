import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReceptionistComponent } from '../assets/ts/receptionist.component';
import { AdminComponent } from '../assets/Admin/admin.component';
import { OccupantComponent } from '../assets/ts/occupant.component';
import { OccupantOrderComponent } from "../assets/ts/occupant-order.component";
import { OccupantDishDetailsComponent } from '../assets/ts/occupant-dish-details.component';
import { OccupantMenuComponent } from '../assets/ts/occupant-menu.component';
import { FlexLayoutModule } from "@angular/flex-layout";

//Admin
import { LandingComponent } from '../assets/ts/landing.component';
import { TableComponent } from "../assets/Admin/ts/table.component";
import { MenuItemComponent } from "../assets/Admin/ts/menu-item.component";
import { LoginComponent } from '../assets/Admin/ts/login.component';
import { AdminNavComponent } from "../assets/Admin/ts/parts/admin-nav.component";
import { AdminSideBarComponent } from "../assets/Admin/ts/parts/admin-side-bar.component";
import { OrderComponent } from "../assets/Admin/ts/order.component";

@NgModule({
  declarations: [
    AppComponent,
    ReceptionistComponent,
    AdminComponent,
    OccupantComponent,
    OccupantDishDetailsComponent,
    OccupantMenuComponent,
    AdminNavComponent,
    AdminSideBarComponent,
    LandingComponent,
    OccupantOrderComponent,
    MenuItemComponent,
    LoginComponent,
    TableComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
