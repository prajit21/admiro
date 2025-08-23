import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-without-borders-style',
  imports: [CommonModule, FormsModule],
  templateUrl: './without-borders-style.html',
  styleUrl: './without-borders-style.scss',
})
export class WithoutBordersStyle {}
