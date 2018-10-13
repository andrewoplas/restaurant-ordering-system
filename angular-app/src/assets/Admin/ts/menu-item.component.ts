import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { MenuItemService } from '@services/menu-item.service';
import { MenuItem } from '@models/MenuItem';
import swal from 'sweetalert2';

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
    this.menuItemService.getAllMenuItems().subscribe(
      data => { this.menuItemList = data;}, 
      error => { this.displayError(error); }
    );
  }

  reinitialize(isLast: boolean) {
    if (isLast && !$.fn.DataTable.isDataTable('#table-menu-item')) {
      setTimeout(function(){
        $('#table-menu-item').dataTable();
      }, 500);

      eval("$('[data-toggle=tooltip]').tooltip();");
    }
  }

  delete(id: number) {
    this.menuItemService.deleteMenuItem(id)
      .subscribe(
        data => {
          if(data != null) {
            if ($.fn.DataTable.isDataTable("#table-menu-item")) {
              $('#table-menu-item').DataTable().clear().destroy();
            }

            this.menuItemList = data;
          
            swal({
              title: "Success",
              text: "Successfully removed the menu item!",
              type:   "success",
              confirmButtonText: "Okay",
              confirmButtonColor: "#FBA62F"
            });
          } else {
            swal({
              title: "Ooops!",
              text: "There was an error during the process. Please try again!",
              type: "error",
              confirmButtonText: "Try Again",
              confirmButtonColor: "#A40020"
            });
          }
      }, 

      error => { this.displayError(error); }
    );
  }

  displayError(error) {
    swal({
      title: error.title,
      text: error.message,
      type: "error",
      confirmButtonText: "Got it!",
      confirmButtonColor: "#A40020"
    });
  }

}
