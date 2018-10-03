import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (this.auth.isloggedIn() && this.auth.isAdmin()) {
      console.log('admin');
      return true;
    }

    this.router.navigate(['/login']);
    console.log('not admin');
    return false;
  }
}
