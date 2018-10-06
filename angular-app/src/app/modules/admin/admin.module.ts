import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { DashboardComponent } from '@admin/dashboard.component';
import { TableComponent } from '@admin/table.component';
import { MenuItemComponent } from '@admin/menu-item.component';
import { MenuItemAddComponent } from '@admin/menu-item-add.component';
import { OrderComponent } from '@admin/order.component';
import { MenuComponent } from '@admin/menu.component';
import { AdminFeedbackComponent } from '@admin/admin-feedback.component';
import { MenuAddComponent } from '@admin/menu-add.component';
import { MenuEditComponent } from '@admin/menu-edit.component';

import { OrderStatusFilterPipe } from '@pipe/order-status-filter.pipe';
import { FeedbackFilterPipe } from '@pipe/feedback-filter.pipe';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'table', component: TableComponent },
    { path: 'menu', component: MenuComponent },
    { path: 'menu/add', component: MenuAddComponent },
    { path: 'menu/edit/:id', component: MenuEditComponent },
    { path: 'menu-item', component: MenuItemComponent },
    { path: 'menu-item/add', component: MenuItemAddComponent },
    { path: 'orders', component: OrderComponent },
    { path: "feedback", component: AdminFeedbackComponent }
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule, 
    FormsModule,
    RouterModule.forChild(routes),
    NgbModule.forRoot(),
    SweetAlert2Module
  ],
  declarations: [
    DashboardComponent,
    TableComponent,
    MenuItemComponent,
    OrderComponent,
    MenuItemAddComponent,
    MenuComponent,
    AdminFeedbackComponent,
    MenuAddComponent,
    MenuEditComponent,
    
    OrderStatusFilterPipe,
    FeedbackFilterPipe,
  ]
})
export class AdminModule { }

