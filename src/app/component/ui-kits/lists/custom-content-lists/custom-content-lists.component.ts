import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CustomContentLists } from '../../../../shared/data/ui-kits/lists';

@Component({
  selector: 'app-custom-content-lists',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './custom-content-lists.component.html',
  styleUrl: './custom-content-lists.component.scss'
})
export class CustomContentListsComponent {

  public customcontentData = CustomContentLists;

}
