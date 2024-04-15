import { Component } from '@angular/core';
import { BecomeMember } from '../../../../shared/data/ecommerce/pricing';

@Component({
  selector: 'app-become-member',
  templateUrl: './become-member.component.html',
  styleUrl: './become-member.component.scss'
})
export class BecomeMemberComponent {

  public becomememberData = BecomeMember;

}
