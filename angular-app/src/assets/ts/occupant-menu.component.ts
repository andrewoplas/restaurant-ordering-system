import { Component, OnInit } from '@angular/core';
import { MenuService } from '@services/menu.service';
import { MenuItemService } from '@services/menu-item.service';
import { MenuItem } from '@models/MenuItem';
import { Menu } from '@models/Menu';

import * as $ from "jquery";
import "animate.css";

@Component({
  selector: 'app-occupant-menu',
  templateUrl: '../html/occupant-menu.component.html',
  styleUrls: [
		'../scss/occupant-menu.component.scss',
		'../../../node_modules/animate.css/animate.min.css'
    ]
})
export class OccupantMenuComponent implements OnInit {
    
	menuList: Array<Menu> = new Array<Menu>();
	menuitemList: Array<MenuItem> = new Array<MenuItem>();
	currentMenu = {
		items: []
	};

	constructor(
		private menuService: MenuService,
		private menuItemService: MenuItemService
	) {}
 
  ngOnInit() {
    this.initializeMenuItems();
    this.clickMenu();
		this.clickFloatingActionButton();
  }

  initializeMenuItems() {
    this.menuService.getMenus().subscribe(
			data => {
				this.menuList = data;
			}
		);

		this.menuItemService.getAllMenuItems().subscribe(
			data => {
				this.menuitemList = data
				this.currentMenu = {
					items: data
				};

				this.animateMenuItems();
			}
		); 
	}
	
  clickMenu() {
		$(document).on('click', '.menu', function () {
			$('.menu').removeClass('active');
			$(this).addClass("active");
		});
	}
	
	showMenu(menu) {
		if(menu == 'all') {
			this.currentMenu = {
				items: this.menuitemList
			};
		} else {
			this.currentMenu = menu;
		}
		
		this.animateMenuItems();
	}

  clickFloatingActionButton() {
		$('.fab-menu').click(function () {
			let isActive = $('.fab-menu-expand').hasClass('active');

			if (!isActive) {
				$(".fab-menu-expand").addClass("active").removeClass("inactive");
				$(this).find('i').text('close');

				setTimeout(function () {
					let menuItems = $('.menu-item-xs');
					menuItems.removeClass('fadeOut');

					for (let i = 1; i <= menuItems.length; i++) {
						setTimeout(function () {
							$(menuItems[i - 1]).removeClass("hide").addClass("fadeIn");
						}, i / 2 * 75);
					}
				}, 400);
			} else {
				$(".menu-container-xs").addClass("hide");
				$(".menu-item-xs").removeClass("fadeIn").addClass("hide");
				$(".fab-menu-expand").addClass("inactive").removeClass("active");
				$(this).find('i').text('restaurant_menu');
			}
		});
	}
	
	animateMenuItems() {
		$(document).ready(function(){
			$(".menu-item")
				.removeClass("hide")
				.addClass("animated zoomIn fast");
    });
	}

}
