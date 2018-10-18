import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuItemService } from '@services/menu-item.service';
import { MenuService } from '@services/menu.service';
import { Menu } from '@models/Menu';
import { MenuItem } from '@models/MenuItem';
import * as $ from 'jquery';
import swal from 'sweetalert2';

@Component({
  selector: 'app-menu-item-edit',
  templateUrl: '../html/menu-item-edit.component.html',
  styleUrls: [
    '../scss/menu-item-add.component.scss',
  ]
})
export class MenuItemEditComponent implements OnInit {
  title = "MENU ITEM"
  id = 0;
  menuItem: MenuItem; 
  menuId;
  menuName = "";
  ingredientsList: Array<string> = new Array<string>(); 
  menuList: Array<Menu> = new Array<Menu>();

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
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router) 
  { 
    this.route.params.subscribe(params => 
      this.id = params['id']
    );
  }

  ngOnInit() {
    this.menuItemService.getMenuItem(this.id).subscribe(
      data => {
        if(data == null) {
          swal({
            title: "Ooops!",
            text: "There was an error during the process. The menu item you are trying to edit might not exist",
            type: "error",
            showConfirmButton: false,
            timer: 2900, 
          });

          setTimeout(this.back(), 3000);
        } else {
          this.menuItem = data;
          this.ingredientsList = data.ingredients; 
          this.menuId = data.menuId;
          this.getMenuName(this.menuId);
        }
      },
    )

  }

  back() {
    this.router.navigate(['admin/menu-item']);
  }

  edit() {
    let menuItem = {      
      id: this.menuItem.id,
      name: this.forms.value.name.trim(),
      description: this.forms.value.description.trim(),
      price: this.forms.value.price,
      salePrice: this.forms.value.salePrice,
      cookingTime: this.forms.value.cookingTime,
      servings: this.forms.value.servings,
      imageLink: this.menuItem.imageLink,
      menuId: this.menuId,
      show: this.forms.value.show,
      ingredients: this.ingredientsList
    }; 

    this.menuItemService.updateMenuItem(menuItem).subscribe(
      data => {
        if(data != null) {
          swal({
            title: "Success",
            text: "Successfully edited the menu item!",
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
      },
    );
  }

  getMenus() {
    this.menuService.getMenus().subscribe(
      data => {
        this.menuList = data;
      }
    );
  }

  getMenuName(id: number) {
    this.menuService.getMenu(id).subscribe(
      data => {
        this.menuName = data.name;
      }
    )
  }
}

