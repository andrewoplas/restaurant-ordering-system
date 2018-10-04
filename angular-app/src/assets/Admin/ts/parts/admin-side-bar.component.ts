import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../app/core/services/auth.service';

@Component({
  selector: 'sidebar',
  templateUrl: '../../html/parts/admin-side-bar.component.html',
  styleUrls: ['../../scss/admin.component.scss']
})
export class AdminSideBarComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  logout() {
    this.auth.logout();
  }

}
