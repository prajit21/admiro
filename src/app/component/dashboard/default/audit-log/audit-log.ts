import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Auditlog } from '../../../../shared/data/dashboard/default/default';
import { ClickOutsideDirective } from '../../../../shared/directives/outside.directive';

@Component({
  selector: 'app-audit-log',
  imports: [ClickOutsideDirective, RouterModule],
  templateUrl: './audit-log.html',
  styleUrl: './audit-log.scss',
})
export class AuditLog {
  public auditLogData = Auditlog;
  public show: boolean = false;

  open() {
    this.show = !this.show;
  }

  clickOutside(): void {
    this.show = false;
  }
}
