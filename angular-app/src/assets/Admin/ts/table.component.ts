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
  tableSeat : string;

  table : Table;
  
  constructor() {}

  ngOnInit() { 
    this.title = "TABLE";
    this.tableSeat = "";

    this.table = {
      id : "",
      seats : 4,
      tablenum : 13
    }

    this.num = 13;
    this.seats = 4;

    this.initFunc();
  }

  addTable(){

    $("#table-number").val(this.table.tablenum);
    $("#table-seats").val(this.table.seats);
    $(".table-details").html(this.table.tablenum);

    $('#table-seats').keypress(function (evt) {
        evt.preventDefault();
    });

    
  }

  initFunc(){
    $('#table-number').on("change", function(){
      this.num = parseInt($("#table-number").val());
      $(".table-details").html(this.num);
    });

    $('#table-seats').on("change", function(){
      if($("#table-seats").val() == 4){
        $(".table-details").css("background-image", "url(assets/img/table-gold-4.png)");
      }
      else{
        $(".table-details").css("background-image", "url(assets/img/table-gold-2.png)");
      }
      console.log(this.seats);
    });

    $('#submit').click(function() {
      // Check seats
      if($("#table-seats").val() == 4){
        this.seats = 4;
      }
      else{
        this.seats = 2;
      }

      this.table = {
        id : "",
        seats : this.seats,
        tablenum : this.num = parseInt($("#table-number").val())
      }
      if(this.table.seats == 2){
        this.tableSeat = "table-two";
      }
      else{
        this.tableSeat = "table-four";
      }
  
      $( ".flex-tables-container" ).append( "<div class=" + "flex-container" + ">" +
      "<div class= 'flex-item table-vacant model_img img-responsive'" + "alt='default'" + "data-toggle= 'modal'" + "data-target='.view-table-modal'>" +
          "<span class='table-pic " + this.tableSeat +"'>" + this.table.tablenum + "</span>" +
      "</div> </div>");
    });

    console.log(this.num);
    console.log(this.seats);
  }

}
