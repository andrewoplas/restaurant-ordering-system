import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";
import { Table } from '@models/Table';
import { TableService } from '@services/table.service';

@Component({
  selector: 'app-receptionist',
  templateUrl: '../html/receptionist.component.html',
  styleUrls: ['../scss/receptionist.component.scss']
})
export class ReceptionistComponent implements OnInit {

  tableList : Array<Table>;

  constructor(private tableService: TableService) { }

  ngOnInit() {
    this.initFunctions();
    this.initTables();
  }

  initTables(){
    this.tableService.getTables().subscribe(
			data => {
        this.tableList = data;
        console.log(this.tableList);
			}, 
		);
  }

  initFunctions(){
    $(".flex-item").click(function(){
      // Traverse each class to remove clicked-table
      $(".flex-item").each(function(){
        $(this).removeClass("clicked-table");
      });
      // Add class clicked table
      $(this).addClass("clicked-table");
    });
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
