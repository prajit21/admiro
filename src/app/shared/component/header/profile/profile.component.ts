import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {

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
