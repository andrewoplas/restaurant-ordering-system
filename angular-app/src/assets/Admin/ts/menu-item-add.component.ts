import { Component, OnInit } from '@angular/core';
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

  constructor() { }

  ngOnInit() {
    
  }

}
