import { Component, OnInit } from '@angular/core';
import { OrderService } from '@services/order.service';
import { Order } from '@models/Order';
import { MenuItemFilterPipe } from '@pipe/menu-item-filter.pipe';

@Component({
  selector: 'app-dashboard',
  templateUrl: '../html/dashboard.component.html',
  styleUrls: ['../scss/dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  title = "DASHBOARD";
  menuItemList: Array<Order> = new Array<Order>();

  constructor(private orderService: OrderService) { }

  ngOnInit() { 
    this.getMenuItems();
  }

  getMenuItems() {
    this.orderService.getOrders().subscribe(
      data => {
        this.menuItemList = data;
      }, 
    );
  }

}
