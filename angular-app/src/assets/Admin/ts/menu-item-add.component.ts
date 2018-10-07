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
  price: FormControl = new FormControl('', Validators.required);
  salePrice: FormControl = new FormControl('', Validators.required);
  cookingTime: FormControl = new FormControl('', Validators.required);
  maxServings: FormControl = new FormControl('', Validators.required);
  imageLink: FormControl = new FormControl('', Validators.required);
  show: FormControl = new FormControl();
  menuId: FormControl = new FormControl('', Validators.required);

  menuList: Array<Menu> = new Array<Menu>();

  constructor(private menuItemService: MenuItemService,
              private menuService: MenuService,
              private formBuilder: FormBuilder) { }

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

    eval(
      'swal({' +
      'title: "Processing",' +
      'text: "Please wait as we process your request",' +
      'showConfirmButton: false,' +
      'confirmButtonColor: "#FBA62F"' +
      '});'
    );
    
    this.menuItemService.addMenuItem(this.menuItem).subscribe(
      data => {
        if(data != null) {
          eval(
            'swal({' +
            'title: "Success",' +
            'text: "Successfully added the menu!",' +
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
