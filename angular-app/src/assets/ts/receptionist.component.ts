import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-receptionist',
  templateUrl: '../html/receptionist.component.html',
  styleUrls: ['../scss/receptionist.component.scss']
})
export class ReceptionistComponent implements OnInit {

  constructor() { }

  ngOnInit() {
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
