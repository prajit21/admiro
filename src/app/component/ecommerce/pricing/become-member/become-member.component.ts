import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BecomeMember } from '../../../../shared/data/ecommerce/pricing';

@Component({
  selector: 'app-become-member',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './become-member.component.html',
  styleUrl: './become-member.component.scss'
})
export class BecomeMemberComponent {

  public becomememberData = BecomeMember;

}
