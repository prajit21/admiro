import { Component } from '@angular/core';
import { Auditlog } from '../../../../shared/data/dashboard/default/default';
import { CommonModule } from '@angular/common';
import { ClickOutsideDirective } from '../../../../shared/directives/outside.directive';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-audit-log',
    imports: [CommonModule, ClickOutsideDirective, RouterModule],
    templateUrl: './audit-log.html',
    styleUrl: './audit-log.scss'
})
export class AuditLog {

  public auditLogData = Auditlog;
  public show: boolean = false;

  open() {
    this.show = !this.show
  }

  clickOutside(): void {
    this.show = false
  }

}
