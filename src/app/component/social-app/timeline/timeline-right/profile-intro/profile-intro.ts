import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-profile-intro',
  imports: [CommonModule, NgbModule],
  templateUrl: './profile-intro.html',
  styleUrl: './profile-intro.scss',
})
export class ProfileIntro {}
