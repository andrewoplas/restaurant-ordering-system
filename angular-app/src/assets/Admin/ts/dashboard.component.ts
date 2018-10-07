import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: '../html/dashboard.component.html',
  styleUrls: ['../scss/dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  title = "DASHBOARD";

  constructor() { }

  ngOnInit() {
  }

}
