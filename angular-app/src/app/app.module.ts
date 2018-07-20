import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReceptionistComponent } from '../assets/ts/receptionist.component';
import { AdminComponent } from '../assets/ts/admin.component';
import { OccupantComponent } from '../assets/ts/occupant.component';
import { ReceptionistDineComponent } from '../assets/ts/receptionist-dine.component';
import { ReceptionistAssistanceComponent } from '../assets/ts/receptionist-assistance.component';
import { ReceptionistOrderComponent } from '../assets/ts/receptionist-order.component';
import { OccupantDishDetailsComponent } from '../assets/ts/occupant-dish-details.component';
import { OccupantMenuComponent } from '../assets/ts/occupant-menu.component';

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
    OccupantMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
