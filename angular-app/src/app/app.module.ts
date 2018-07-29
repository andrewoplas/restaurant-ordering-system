import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReceptionistComponent } from '../assets/ts/receptionist.component';
import { AdminComponent } from '../assets/Admin/ts/admin.component';
import { OccupantComponent } from '../assets/ts/occupant.component';
import { ReceptionistDineComponent } from '../assets/ts/receptionist-dine.component';
import { ReceptionistAssistanceComponent } from '../assets/ts/receptionist-assistance.component';
import { ReceptionistOrderComponent } from '../assets/ts/receptionist-order.component';
import { OccupantDishDetailsComponent } from '../assets/ts/occupant-dish-details.component';
import { OccupantMenuComponent } from '../assets/ts/occupant-menu.component';
import { FlexLayoutModule } from "@angular/flex-layout";

//Admin 


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
