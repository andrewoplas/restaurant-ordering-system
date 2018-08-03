import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'overview',
  templateUrl: '../html/over-view.component.html',
  styleUrls: ['../scss/admin.component.scss']
})
export class OverViewComponent implements OnInit {

  @Input() datas : any;
  constructor() { }

  ngOnInit() {
  } 

}
