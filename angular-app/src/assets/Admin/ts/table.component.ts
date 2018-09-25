import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-table',
  templateUrl: '../html/table.component.html',
  styleUrls: ['../scss/table.component.scss']
})
export class TableComponent implements OnInit {

  title : string;
  num : number;
  seats : number;
  
  constructor() {}

  ngOnInit() { 
    this.title = "TABLE";
  }

  addTable(){
    this.num = 13;
    this.seats = 4;

    $("#table-number").val(this.num);
    $("#table-seats").val(this.seats);
    $(".table-details").html(this.num);

    this.initFunc();

    $('#table-seats').keypress(function (evt) {
        evt.preventDefault();
    });
  }

  submitTable(){
    
  }

  initFunc(){
    $('#table-number').on("change", function(){
      this.num = $("#table-number").val();
      $(".table-details").html(this.num);
    });

    $('#table-seats').on("change", function(){
      if($("#table-seats").val() == 4){
        $(".table-details").css("background-image", "url(assets/img/table-gold-4.png)");
        this.seats = 4;
      }
      else{
        $(".table-details").css("background-image", "url(assets/img/table-gold-2.png)");
        this.seats = 2;
      }
    });
  }

}
