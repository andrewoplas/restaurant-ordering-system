import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { MenuService } from '@services/menu.service';
import * as $ from 'jquery';
import 'datatables.net';

@Component({
  selector: 'app-menu-edit',
  templateUrl: '../html/menu-edit.component.html',
  styleUrls: ['../scss/menu-add.component.scss']
})
export class MenuEditComponent implements OnInit {
  title = "MENU";
  id = 0;
  menu;  

  forms = this.fb.group({
    name: ["", Validators.required],
    description: ["", Validators.required],
    show: [""]
  });

  constructor(
    private fb:FormBuilder,
    private menuService: MenuService,
    private route: ActivatedRoute,
    private router: Router
  ) { 
    this.route.params.subscribe(params => 
      this.id = params['id']
    )
  }

  ngOnInit() {
    this.menuService.getMenu(this.id).subscribe(
      data => {
        if(data == null) {
          eval(
            'swal({' +
            'title: "Ooops!",' +
            'text: "There was an error during the process. The menu you are trying to edit might not exist",' +
            'type: "error",' +
            'showConfirmButton: false,' +
            'timer: 2900, ' +
            '});'
          );

          setTimeout(this.back(), 3000);
        } else {
          this.menu = data; 
        }
    })
  }

  back() {
    this.router.navigate(['admin/menu']);
  }

  reinitialize(isLast: boolean) {
    if (isLast && !$.fn.DataTable.isDataTable('#table-menu-items')) {
      setTimeout(function(){
        $('#table-menu-items').dataTable();
      }, 500);

      eval("$('[data-toggle=tooltip]').tooltip();");
    }
  }

  edit() {
    let menu = {      
      id: this.menu.id,
      name: this.forms.value.name.trim(),
      description: this.forms.value.description.trim(),
      menu_items: this.menu.menu_items,
      show: this.forms.value.show,
    };

    eval(
      'swal({' +
      'title: "Processing",' +
      'text: "Please wait as we process your request",' +
      'showConfirmButton: false,' +
      'confirmButtonColor: "#FBA62F"' +
      '});'
    );

    this.menuService.updateMenu(menu).subscribe(
      data => {
        if(data != null) {
          eval(
            'swal({' +
            'title: "Success",' +
            'text: "Successfully updated menu item!",' +
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
      }
    );
  }

  removeMenuItem(id) {
    let index = this.menu.menu_items.indexOf(id);
    if(index != -1) {
      this.menu.menu_items.splice(index, 1);
      this.menu.items.splice(index, 1);
    }
  }
}
