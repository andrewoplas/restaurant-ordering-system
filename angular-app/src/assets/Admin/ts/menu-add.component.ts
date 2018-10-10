import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MenuService } from '@services/menu.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-menu-add',
  templateUrl: '../html/menu-add.component.html',
  styleUrls: ['../scss/menu-add.component.scss']
})
export class MenuAddComponent implements OnInit {
  title = "MENU"

  forms = this.fb.group({
    name: ["", Validators.required],
    description: ["", Validators.required],
    show: [""]
  });

  constructor(
    private fb:FormBuilder,
    private menuService: MenuService
  ) { }

  ngOnInit() {
  }

  create() {
    let menu = {      
      id: 0,
      name: this.forms.value.name.trim(),
      description: this.forms.value.description.trim(),
      menu_items: null,
      show: this.forms.value.show,
    };

    swal({
      title: "Processing",
      text: "Please wait as we process your request",
      showConfirmButton: false,
    });

    this.menuService.addMenu(menu).subscribe(
      data => {
        if(data != null) {
          swal({
            title: "Success",
            text: "Successfully added the menu!",
            type: "success",
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
      }
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
