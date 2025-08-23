import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { Feathericon } from '../../../../../shared/component/feathericon/feathericon';

@Component({
  selector: 'app-comment-one',
  imports: [CommonModule, Feathericon],
  templateUrl: './comment-one.html',
  styleUrl: './comment-one.scss',
})
export class CommentOne {}
