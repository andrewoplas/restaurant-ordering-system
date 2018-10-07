import { Component, OnInit, Input } from '@angular/core';
import { MenuService } from '../../../app/core/services/menu.service';
import { Menu } from '../../../app/models/Menu';
import * as $ from 'jquery';

@Component({
  selector: "app-menu",
  templateUrl: "../html/menu.component.html",
  styleUrls: ["../scss/menu.component.scss"]
})
export class MenuComponent implements OnInit {
  title = "MENU";
  menuList: Array<Menu> = new Array<Menu>();

  constructor(private menuService: MenuService) {}

  ngOnInit() {
    this.menuService.getMenus().subscribe(
      data => { this.menuList = data; }
    );
  }

  reinitialize(isLast: boolean) {
    if (isLast && !$.fn.DataTable.isDataTable('#table-menu')) {
      $('#table-menu').dataTable();
      eval("$('[data-toggle=tooltip]').tooltip();");
    }
  }

  delete(id: number) {
    this.menuService.deleteMenu(id)
      .subscribe(
        success => {
          if(success) {
            this.menuList = this.menuList.filter(o => o.id != id);
             alert('done');
          } else {
             alert('error');
          }
      });
  }
}
