import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { MenuItemService } from '@services/menu-item.service';
import { MenuItem } from '@models/MenuItem';

@Component({
  selector: 'display-item-menu',
  templateUrl: '../html/menu-item.component.html',
  styleUrls: ['../scss/menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {
  title = "MENU ITEM";
  menuItemList: Array<MenuItem> = new Array<MenuItem>();
  
  constructor(
    private menuItemService: MenuItemService
  ) { }


  ngOnInit() {
    // $('input[type=file]').change(function () {
    //   var filePath = $(this).val().replace(/^.*[\\\/]/, '');
    //   $("#file-name").text(filePath); 
    // });

    this.menuItemService.getAllMenuItems().subscribe(
      data => { this.menuItemList = data; }
    );
  }

  reinitialize(isLast: boolean) {
    if (isLast && !$.fn.DataTable.isDataTable('#table-menu-item')) {
      $('#table-menu-item').dataTable();
      eval("$('[data-toggle=tooltip]').tooltip();");
    }
  }

  // delete(id: number) {
  //   this.menuService.deleteMenu(id)
  //     .subscribe(
  //       success => {
  //         if(success) {
  //           this.menuList = this.menuList.filter(o => o.id != id);
  //            alert('done');
  //         } else {
  //            alert('error');
  //         }
  //     });
  // }

}
