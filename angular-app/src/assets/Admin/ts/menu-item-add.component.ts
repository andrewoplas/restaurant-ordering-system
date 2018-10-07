import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MenuItemService } from '../../../app/core/services/menu-item.service';
import { MenuService } from '../../../app/core/services/menu.service';
import { MenuItem } from '../../../app/models/MenuItem';
import { Menu } from '../../../app/models/Menu';
import * as $ from "jquery";

@Component({
  selector: 'app-menu-item-add',
  templateUrl: '../html/menu-item-add.component.html',
  styleUrls: [
    '../scss/menu-item-add.component.scss',
  ]
})
export class MenuItemAddComponent implements OnInit {
  title = "MENU ITEM"
  //menuItem: MenuItem = new MenuItem();

  menuItemForm = this.formBuilder.group({
    name: ["", Validators.required],
    description: ["", Validators.required],
    price: ["", Validators.required],
    salePrice: ["", Validators.required],
    cookingTime: ["", Validators.required],
    servings: ["", Validators.required],
    imageLink: ["", Validators.required],
    show: [""],
    menuId: ["", Validators.required],
  });

  menuList: Array<Menu> = new Array<Menu>();

  constructor(private menuItemService: MenuItemService,
              private menuService: MenuService,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getMenus();
  }



  addItem() {
    let menuItem = {      
      id: 0,
      name: this.menuItemForm.value.name.trim(),
      description: this.menuItemForm.value.description.trim(),
      price: this.menuItemForm.value.price.trim(),
      salePrice: this.menuItemForm.value.salePrice.trim(),
      cookingTime: this.menuItemForm.value.cookingTime.trim(),
      servings: this.menuItemForm.value.servings.trim(),
      imageLink: this.menuItemForm.value.imageLink.trim(),
      menuId: this.menuItemForm.value.menuId.trim(),
      show: this.menuItemForm.value.show,
    }; 
    eval(
      'swal({' +
      'title: "Processing",' +
      'text: "Please wait as we process your request",' +
      'showConfirmButton: false,' +
      'confirmButtonColor: "#FBA62F"' +
      '});'
    );
    
    this.menuItemService.addMenuItem(menuItem).subscribe(
      data => {
        if(data != null) {
          eval(
            'swal({' +
            'title: "Success",' +
            'text: "Successfully added the menu item!",' +
            'type: "success",' +
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

  getMenus() {
    this.menuService.getMenus().subscribe(
      data => {
        this.menuList = data;
      }
    );
  }

  onSubmit() {
    this.addItem();
  }

}
