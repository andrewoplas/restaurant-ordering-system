import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReceptionistComponent } from '../assets/ts/receptionist.component';
import { AdminComponent } from '../assets/Admin/admin.component';
import { OccupantComponent } from '../assets/ts/occupant.component';
import { OccupantOrderComponent } from "../assets/ts/occupant-order.component";
import { ReceptionistDineComponent } from '../assets/ts/receptionist-dine.component';
import { ReceptionistAssistanceComponent } from '../assets/ts/receptionist-assistance.component';
import { ReceptionistOrderComponent } from '../assets/ts/receptionist-order.component';
import { OccupantDishDetailsComponent } from '../assets/ts/occupant-dish-details.component';
import { OccupantMenuComponent } from '../assets/ts/occupant-menu.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { AdminNavComponent } from '../assets/Admin/ts/admin-nav.component';
import { OverViewComponent } from '../assets/Admin/ts/over-view.component';
import { AdminSideBarComponent } from '../assets/Admin/ts/admin-side-bar.component';
import { MapComponent } from '../assets/Admin/ts/map.component';

//Admin
import { LandingComponent } from '../assets/ts/landing.component';
import { AdminDisplayItemMenuComponent } from '../assets/Admin/ts/admin-display-item-menu.component';
import { LoginComponent } from '../assets/Admin/ts/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ReceptionistComponent,
    AdminComponent,
    OccupantComponent,
    ReceptionistDineComponent,
    ReceptionistAssistanceComponent,
    ReceptionistOrderComponent,
    OccupantDishDetailsComponent,
    OccupantMenuComponent,
    AdminNavComponent,
    OverViewComponent,
    AdminSideBarComponent,
    MapComponent,
    LandingComponent,
    OccupantOrderComponent,
    AdminDisplayItemMenuComponent,
    LoginComponent
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
