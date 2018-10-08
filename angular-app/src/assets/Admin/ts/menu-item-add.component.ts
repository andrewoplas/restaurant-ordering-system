import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { MenuItemService } from '@services/menu-item.service';
import { MenuService } from '@services/menu.service';
import { Menu } from '@models/Menu';
import * as $ from 'jquery';

@Component({
  selector: 'app-menu-item-add',
  templateUrl: '../html/menu-item-add.component.html',
  styleUrls: [
    '../scss/menu-item-add.component.scss',
  ]
})
export class MenuItemAddComponent implements OnInit {
  title = "MENU ITEM"
  menuList: Array<Menu> = new Array<Menu>();
  //menuItem: MenuItem = new MenuItem();

  forms = this.formBuilder.group({
    name: ["", Validators.required],
    description: ["", Validators.required],
    price: [""],
    salePrice: [""],
    cookingTime: [""],
    servings: [""],
    imageLink: [""],
    show: [""],
    menuId: [""],
  });

  constructor(
    private menuItemService: MenuItemService,
    private menuService: MenuService,
    private formBuilder: FormBuilder) 
  { }

  ngOnInit() {
    this.getMenus();
  }

  create() {
    let menuItem = {      
      id: 0,
      name: this.forms.value.name.trim(),
      description: this.forms.value.description.trim(),
      price: this.forms.value.price,
      salePrice: this.forms.value.salePrice,
      cookingTime: this.forms.value.cookingTime,
      servings: this.forms.value.servings,
      imageLink: this.forms.value.imageLink.trim(),
      menuId: this.forms.value.menuId.trim(),
      show: this.forms.value.show,
      ingredients: eval('$("[data-role=tagsinput]").tagsinput("items")')
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
}
