import { Component } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { Feathericon } from '../../../../shared/component/feathericon/feathericon';
import { findCourse } from '../../../../shared/data/learning/learning';

@Component({
  selector: 'app-find-cource',
  imports: [Feathericon, NgbModule],
  templateUrl: './find-cource.html',
  styleUrl: './find-cource.scss',
})
export class FindCource {
  public findCourse = findCourse;
  public isCollapsed = false;
}
