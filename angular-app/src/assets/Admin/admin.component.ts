import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-admin',
  templateUrl: './html/admin.component.html',
  styleUrls: ['./scss/admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor( ) { }

  ngOnInit() {
    $('.preloader').fadeOut();
  }
}
