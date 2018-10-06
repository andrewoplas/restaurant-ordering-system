import { Component, OnInit } from '@angular/core';

import * as $ from "jquery";
import "animate.css";
import { Menu } from '../../app/models/Menu';
import { MenuService } from '@services/menu.service';

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
    constructor(private menuService: MenuService) {}
 

  ngOnInit() {
    this.initializeMenuItems();
    this.clickMenu();
    this.clickFloatingActionButton();
  }

  initializeMenuItems() {
    this.menuService.getMenus().subscribe(
        data => {
          this.menuList = data;
          console.log(data);
        }
      );

    $(document).ready(function(){
        $(".menu-item")
          .removeClass("hide")
          .addClass("animated zoomIn fast");
    });
  }
  
  clickMenu() {
      $(document).on('click', '.menu', function () {
          $('.menu').removeClass('active');
          $(this).addClass("active");
      });
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

}
