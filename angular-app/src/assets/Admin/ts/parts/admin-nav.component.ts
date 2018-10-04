import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../app/core/services/auth.service';

@Component({
  selector: 'navbar',
  templateUrl: '../../html/parts/admin-nav.component.html',
  styleUrls: ['../../scss/admin.component.scss']
})
export class AdminNavComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  logout() {
    this.auth.logout();
  }

}
