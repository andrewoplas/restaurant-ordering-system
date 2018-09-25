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

    this.initFunc();

    $('#table-seats').keypress(function (evt) {
        evt.preventDefault();
    });
  }

  submitTable(){
    var num = $("#table-number").val();
    var seats = $("#table-seats").val();
  }

  initFunc(){
    $('#table-seats').on("change", function(){
      if($("#table-seats").val() == 4){
        $(".table-details").css("background-image", "url(assets/img/table-gold-4.png)");
      }
      else{
        $(".table-details").css("background-image", "url(assets/img/table-gold-2.png)");
      }
    });
  }

}
