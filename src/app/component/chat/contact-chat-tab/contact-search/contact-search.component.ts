import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FeathericonComponent } from '../../../../shared/component/feathericon/feathericon.component';

@Component({
  selector: 'app-contact-search',
  standalone: true,
  imports: [CommonModule,FeathericonComponent],
  templateUrl: './contact-search.component.html',
  styleUrl: './contact-search.component.scss'
})
export class ContactSearchComponent {

}
