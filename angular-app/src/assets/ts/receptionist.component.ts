import { Component, OnInit, Renderer2 } from '@angular/core';
import * as $ from "jquery";
import { Table } from '@models/Table';
import { TableService } from '@services/table.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-receptionist',
  templateUrl: '../html/receptionist.component.html',
  styleUrls: ['../scss/receptionist.component.scss']
})
export class ReceptionistComponent implements OnInit {

  tableList : Array<Table>;
  fourSeater : String;
  twoSeater : String;
  currentDate : String;
  currentTime: Date;

  constructor(private tableService: TableService, private renderer: Renderer2) { }

  ngOnInit() {
    this.fourSeater = "assets/img/table-gold-4.png";
    this.twoSeater = "assets/img/table-gold-2.png";
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    this.currentDate = new Date().toLocaleDateString("en-US", options);
    
    this.initTables();
    this.initFunctions(this.tableList);
    this.updateTime();
  }

  initTables(){
    this.tableService.getTables().subscribe(
			data => {
        this.tableList = data;
			}, 
		);
  }

  initFunctions(tableList){
    $(document).on('click touchstart select', '.flex-item', function(){
      // Traverse each class to remove clicked-table
      $(".flex-item").each(function(){
        $(this).removeClass("clicked-table");
      });
      // Add class clicked table
      $(this).addClass("clicked-table");
    });

    $(document).on('click touchstart select', '.reception-btn', function(){
      if($(document).find(".clicked-table").length){
        if(!$(document).find(".clicked-table").find(".table-occupied").length){
          var tablenum = parseInt($(document).find(".clicked-table").html());
          var capacity;
          var id;
          for(var i = 0; i < tableList.length; i++){
            if(tableList[i].tableNumber = tablenum){
              capacity = tableList[i].capacity;
              id = tableList[i].id;
            }
            let table : Table = {
              id : id,
              capacity : capacity,
              tableNumber : tablenum,
              status : "unavailable"
            }
            this.tableService.updateTable(table).subscribe(
              data => {
                swal({
                  title: "Success!",
                  text: "Table is not taken and is ready for servings.",
                  type:   "success",
                  confirmButtonText: "Got it!",
                  confirmButtonColor: "#FBA62F"
                });
              }, 
            );
          }
        }
        else{
          swal({
            title: "Ooops!",
            text: "That table is already occupied.",
            type:   "error",
            confirmButtonText: "Got it!",
            confirmButtonColor: "#FBA62F"
          });
        }
      }
      else{
        swal({
          title: "Ooops!",
          text: "You may not have selected any tables, please try selecting one.",
          type:   "error",
          confirmButtonText: "Got it!",
          confirmButtonColor: "#FBA62F"
        });
      }
  });
}
  
  updateTime() {
    setInterval(() => {
      this.currentTime = new Date();
      $(".time-text").html(formatAMPM(this.currentTime));
    }, 100);

    function formatAMPM(date) {
      var hours = date.getHours();
      var minutes = date.getMinutes();
      var ampm = hours >= 12 ? 'pm' : 'am';
      hours = hours % 12;
      hours = hours ? hours : 12;
      minutes = minutes < 10 ? '0'+minutes : minutes;
      var strTime = hours + ':' + minutes + ' ' + ampm;
      return strTime;
    }
  }

  openTab(tabName) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(tabName).style.display = "block";
    document.getElementById(tabName + "-btn").className += " active";
  }

}
