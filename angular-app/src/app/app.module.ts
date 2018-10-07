import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from "@angular/core";
import { CoreModule } from './core/core.module';
import { SweetAlert2Module } from "@toverux/ngx-sweetalert2";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { FlexLayoutModule } from '@angular/flex-layout';

import { AdminNavComponent } from '@admin/parts/admin-nav.component';
import { AdminSideBarComponent } from '@admin/parts/admin-side-bar.component';
import { AdminComponent } from '../assets/Admin/admin.component';
import { LoginComponent } from '@admin/login.component';
import { ReceptionistComponent } from "@occupant/receptionist.component";
import { OccupantOrderComponent } from "@occupant/occupant-order.component";
import { OccupantMenuComponent } from "@occupant/occupant-menu.component";
import { FeedbackComponent } from '@occupant/feedback.component';
import { LandingComponent } from '@occupant/landing.component';

@NgModule({
  declarations: [
    AppComponent,
    ReceptionistComponent,
    OccupantMenuComponent,
    LandingComponent,
    OccupantOrderComponent,
    FeedbackComponent,
    LoginComponent,
    AdminComponent,
    AdminNavComponent,
    AdminSideBarComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    FlexLayoutModule,
    HttpClientModule,
    SweetAlert2Module.forRoot(),
    CoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
