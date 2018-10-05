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
  flexItem : string;

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

    this.addOnChange();
    this.addSubmit();
    this.editTable();
    this.editOnChange();
  }

  // add table funtionalities
  addTable(){
    $("#table-number").val(this.table.tablenum);
    $("#table-seats").val(this.table.seats);
    $(".table-details").html(this.table.tablenum);

    $('#table-seats').keypress(function (evt) {
        evt.preventDefault();
    });
  }

  addOnChange(){
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
    });
  }

  addSubmit(){
    $('#submit-add-table').click(function() {
      // check seats
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
  
      $( ".flex-catcher" ).append( "" +
      "<div class='flex-item table-vacant'>" +
          "<div class='row'>" +
              "<div class='col-lg-12 col-md-8 col-sm-12 span-container model_img img-responsive' alt='default' data-toggle='modal' data-target='.view-table-modal' title='View Table'>" +
                "<span class='table-pic " + this.tableSeat +"'>" + this.table.tablenum + "</span>" +
              "</div>" +
              "<div class='col-lg-12 col-md-8 col-sm-12 button-container'>" +
                  "<div class='col-lg-6 col-md-6 col-sm-12 button-edit'>" +
                      "<i _ngcontent-c4 class='mdi mdi-pencil'></i>" +
                  "</div>" +
                  "<div class='col-lg-6 col-md-6 col-sm-12 button-delete' [swal]='deleteTable' data-toggle='tooltip'>" +
                      "<i _ngcontent-c4 class='mdi mdi-delete'></i>" +
                  "</div>" +
              "</div>" +
          "</div>" +
      "</div>");
    });
  }
  //-- end add table funtionalities

  // edit table funtionalities
  editTable(){
    var tnum = 0;
    var tid = 0;

    $(".button-edit").click(function(){
      tnum = $(this).parent().parent().find(".table-pic").html();
      tid = $(this).parent().parent().parent().attr("table-id");

      console.log();

      $(".edit-number").val(tnum);
      $(".edit-details").html(tnum);

      if (parseInt($(this).parent().parent().find(".table-pic").attr("num-seats")) == 4){
          $(".edit-seats").val(4);
          $(".edit-details").css("background-image", "url(assets/img/table-gold-4.png)");
      } else {
          $(".edit-seats").val(2);
          $(".edit-details").css("background-image", "url(assets/img/table-gold-2.png)");
      }
    });

    $('#submit-edit-table').click(function() {
      // check seats
      if(parseInt($(".edit-seats").val()) == 4){ this.seats = 4; }
      else{ this.seats = 2; }

      this.table = {
        id : tid,
        seats : this.seats,
        tablenum : this.num = parseInt($(".edit-number").val())
      }
      
      var flexItem = $("[table-id="+ this.table.id +"]");
      flexItem.find('.table-pic').text(this.num);

      if(this.table.seats == 4){
        flexItem.find('.table-pic').css("background-image", "url(assets/img/table-gold-4.png)");
        flexItem.find('.table-pic').attr("num-seats", 4);
      }
      else{
        flexItem.find('.table-pic').css("background-image", "url(assets/img/table-gold-2.png)");
        flexItem.find('.table-pic').attr("num-seats", 2);
      }
    });
  }

  editOnChange(){
    $('.edit-number').on("change", function(){
      this.num = parseInt($(".edit-number").val());
      $(".edit-details").html(this.num);
    });

    $('.edit-seats').on("change", function(){
      if($(".edit-seats").val() == 4){
        $(".edit-details").css("background-image", "url(assets/img/table-gold-4.png)");
      }
      else{
        $(".edit-details").css("background-image", "url(assets/img/table-gold-2.png)");
      }
    });
  }
  //-- end edit table funtionalities
    

}
