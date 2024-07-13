import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FeathericonComponent } from '../../../../../shared/component/feathericon/feathericon.component';

@Component({
  selector: 'app-comment-two',
  standalone: true,
  imports: [CommonModule,FeathericonComponent],
  templateUrl: './comment-two.component.html',
  styleUrl: './comment-two.component.scss'
})
export class CommentTwoComponent {

}
