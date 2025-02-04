import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FeathericonComponent } from '../../../../../shared/component/feathericon/feathericon.component';

@Component({
    selector: 'app-comment-one',
    imports: [CommonModule, FeathericonComponent],
    templateUrl: './comment-one.component.html',
    styleUrl: './comment-one.component.scss'
})
export class CommentOneComponent {

}
