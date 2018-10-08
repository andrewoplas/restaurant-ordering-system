import { Component, OnInit, Input } from '@angular/core';
import { MenuService } from '@services/menu.service';
import { Menu } from '@models/Menu';
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
      setTimeout(function(){
        $('#table-menu').dataTable();
      }, 500);
        
      eval("$('[data-toggle=tooltip]').tooltip();");
    }
  }

  delete(id: number) {
    eval(
      'swal({' +
      'title: "Processing",' +
      'text: "Please wait as we process your request",' +
      'showConfirmButton: false,' +
      '});'
    );

    this.menuService.deleteMenu(id)
      .subscribe(
        data => {
          if(data != null) {
            if ($.fn.DataTable.isDataTable("#table-menu")) {
              $('#table-menu').DataTable().clear().destroy();
            }
            
            this.menuList = data;
             
            eval(
              'swal({' +
              'title: "Success",' +
              'text: "Successfully removed menu!",' +
              'type:   "success",' +
              'confirmButtonText: "Okay",' +
              'confirmButtonColor: "#FBA62F"' +
              '});'
            );
          } else {
            eval(
              'swal({' +
              'title: "Ooops!",' +
              'text: "There was an error during the process. Please try again!",' +
              'type: "error",' +
              'confirmButtonText: "Try Again",' +
              'confirmButtonColor: "#A40020"' +
              '});'
            );
          }
      });
  }
}
