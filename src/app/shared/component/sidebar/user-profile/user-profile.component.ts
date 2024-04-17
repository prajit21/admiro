import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss'
})
export class UserProfileComponent {

  public profile: boolean = false;
  constructor(private router: Router) { }

  open() {
    this.profile = !this.profile
  }

  clickOutside(): void {
    this.profile = false;
  }

  logOut() {
    localStorage.clear();
    this.router.navigate(['/auth/login'])
  }


}
