import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { BecomeMembers } from '../../../../shared/data/ecommerce/pricing';

@Component({
  selector: 'app-become-member',
  imports: [CommonModule],
  templateUrl: './become-member.html',
  styleUrl: './become-member.scss',
})
export class BecomeMember {
  public becomememberData = BecomeMembers;
}
