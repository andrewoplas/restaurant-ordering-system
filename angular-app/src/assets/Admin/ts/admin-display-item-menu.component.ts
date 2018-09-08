import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

import 'datatables.net-bs4';

@Component({
  selector: 'display-item-menu',
  templateUrl: '../html/admin-display-item-menu.component.html',
  styleUrls: ['../scss/admin-display-item-menu.component.scss']
})
export class AdminDisplayItemMenuComponent implements OnInit {

  constructor() { }


  ngOnInit() {
    $('#editable-datatable').dataTable({
      "columnDefs": [ {
        "targets": [0, 5],
        "orderable": false
        } ],
        "lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "All"]],
        "dom": "<'row'<'col-sm-12 col-md-6'l><'col-sm-12 col-md-6'f>>" +
        "<'row'<'col-sm-12'tr>>" +
        "<'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>"
    });
    $('input[type=file]').change(function () {
      var filePath = $(this).val().replace(/^.*[\\\/]/, '');
      $("#file-name").text(filePath); 
  });
  }

}
