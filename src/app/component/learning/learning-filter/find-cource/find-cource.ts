import { Component } from '@angular/core';
import { findCourse } from '../../../../shared/data/learning/learning';
import { CommonModule } from '@angular/common';
import { Feathericon } from '../../../../shared/component/feathericon/feathericon';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-find-cource',
    imports: [CommonModule, Feathericon, NgbModule],
    templateUrl: './find-cource.html',
    styleUrl: './find-cource.scss'
})
export class FindCource {

  public findCourse = findCourse;
  public isCollapsed = false;

}
