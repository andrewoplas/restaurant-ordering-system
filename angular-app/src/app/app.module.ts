import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from "@angular/core";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { FlexLayoutModule } from '@angular/flex-layout';

//Occupant
import { ReceptionistComponent } from "../assets/ts/receptionist.component";
import { AdminComponent } from "../assets/Admin/admin.component";
import { OccupantComponent } from "../assets/ts/occupant.component";
import { OccupantOrderComponent } from "../assets/ts/occupant-order.component";
import { OccupantDishDetailsComponent } from "../assets/ts/occupant-dish-details.component";
import { OccupantMenuComponent } from "../assets/ts/occupant-menu.component";

//Admin
import { LandingComponent } from '../assets/ts/landing.component';
import { TableComponent } from '../assets/Admin/ts/table.component';
import { MenuItemComponent } from '../assets/Admin/ts/menu-item.component';
import { LoginComponent } from '../assets/Admin/ts/login.component';
import { AdminNavComponent } from '../assets/Admin/ts/parts/admin-nav.component';
import { AdminSideBarComponent } from '../assets/Admin/ts/parts/admin-side-bar.component';
import { OrderComponent } from '../assets/Admin/ts/order.component';

//Service
import { OrderService } from '../app/core/services/order.service';

export function startupOrderFactory(orderService: OrderService): Function {
  return () => orderService.load();
}

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
    FlexLayoutModule,
    HttpClientModule
  ],
  providers: [
    OrderService,
    {
      // Provider for orderList
      provide: APP_INITIALIZER,
      useFactory: startupOrderFactory,
      deps: [OrderService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
