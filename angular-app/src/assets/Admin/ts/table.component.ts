import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-table',
  templateUrl: '../html/table.component.html',
  styleUrls: ['../scss/table.component.scss']
})
export class TableComponent implements OnInit {

  title = "TABLE";
  
  constructor() { }

  ngOnInit() { }

  addTable(){
    $("#table-number").val("13");
    $("#table-seats").val("4");

    $('#table-seats').keypress(function (evt) {
        evt.preventDefault();
    });
  }

}
