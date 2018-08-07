import { Component, OnInit } from '@angular/core';

import * as $ from "jquery";

@Component({
  selector: 'app-occupant-menu',
  templateUrl: '../html/occupant-menu.component.html',
  styleUrls: ['../scss/occupant-menu.component.scss']
})
export class OccupantMenuComponent implements OnInit {
    
  constructor() { }

  ngOnInit() {
    $(document).on('click', '.menu', function(){
      $('.menu').removeClass('active');
      $(this).addClass("active");
    });
  }

}
