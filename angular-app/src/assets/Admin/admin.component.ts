import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './html/admin.component.html',
  styleUrls: ['./sass/admin.component.scss']
})
export class AdminComponent implements OnInit {
  datas : any = [
                  {
                    'name':'Okay here we go',
                    'icon':'icon-people',
                    'number' : 255
                  },
                  {
                    'name':'Okay here we go',
                    'icon':'icon-folder',
                    'number' : 255
                  }
                ];
  constructor() { }

  ngOnInit() {
  }

}
