import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'display-item-menu',
  templateUrl: '../html/menu-item.component.html',
  styleUrls: ['../scss/menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {

  title = "MAIN COURSE";
  
  constructor() { }


  ngOnInit() {
    $('input[type=file]').change(function () {
      var filePath = $(this).val().replace(/^.*[\\\/]/, '');
      $("#file-name").text(filePath); 
    });
  }

  ngAfterViewInit() {
    $("#table-menu-item").dataTable({
      columnDefs: [
        {
          targets: [0, 5],
          orderable: false
        }
      ]
    });
  }

}
