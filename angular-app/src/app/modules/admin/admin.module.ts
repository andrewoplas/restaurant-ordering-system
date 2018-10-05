import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SweetAlert2Module } from "@toverux/ngx-sweetalert2";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { AdminComponent } from "../../../assets/Admin/admin.component";
import { AdminNavComponent } from '@admin/parts/admin-nav.component';
import { AdminSideBarComponent } from '@admin/parts/admin-side-bar.component';
import { TableComponent } from '@admin/table.component';
import { MenuItemComponent } from '@admin/menu-item.component';
import { OrderComponent } from '@admin/order.component';
import { MenuItemAddComponent } from "@admin/menu-item-add.component";
import { MenuComponent } from '@admin/menu.component';

import { OrderStatusFilterPipe } from '@pipe/order-status-filter.pipe';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: AdminComponent, 
    children: [
      { path: "dashboard", component: MenuItemComponent },
      { path: "table", component: TableComponent },
      { path: "menu", component: MenuComponent },
      { path: "menu-item", component: MenuItemComponent },
      { path: "menu-item/add", component: MenuItemAddComponent },
      { path: "orders", component: OrderComponent }
    ],
  },
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule, 
    FormsModule,
    RouterModule.forChild(routes),
    NgbModule.forRoot(),
    SweetAlert2Module.forRoot(),
  ],
  declarations: [
    AdminComponent,
    AdminNavComponent,
    AdminSideBarComponent,
    TableComponent,
    MenuItemComponent,
    OrderComponent,
    MenuItemAddComponent,
    MenuComponent,
    
    OrderStatusFilterPipe,
  ]
})
export class AdminModule { }

