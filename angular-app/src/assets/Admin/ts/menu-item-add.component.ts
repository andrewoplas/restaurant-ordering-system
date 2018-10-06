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
  menuItem: MenuItem = new MenuItem();

  menuItemForm : FormGroup;
  name:  FormControl = new FormControl('', Validators.required);
  description: FormControl = new FormControl('', Validators.required);
  price: FormControl = new FormControl();
  salePrice: FormControl = new FormControl();
  cookingTime: FormControl = new FormControl();
  maxServings: FormControl = new FormControl();
  imageLink: FormControl = new FormControl('', Validators.required);
  show: FormControl = new FormControl();
  menuId: FormControl = new FormControl('', Validators.required);

  menuList: Array<Menu> = new Array<Menu>();

  constructor(private menuItemService: MenuItemService, private menuService: MenuService) { }

  ngOnInit() {
    //this.getMenus();
    this.menuItemForm = new FormGroup({
      name: this.name,
      description: this.description,
      price: this.price,
      salePrice: this.salePrice,
      cookingTime: this.cookingTime,
      maxServings: this.maxServings,
      imageLink: this.imageLink,
      show: this.show,
      menuId: this.menuId
    });
  }

  addItem() {
    this.menuItemService.addMenuItem(this.menuItem).subscribe(
      data => {
      
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
