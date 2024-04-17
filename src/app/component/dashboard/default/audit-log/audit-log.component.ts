import { Component } from '@angular/core';
import { Auditlog } from '../../../../shared/data/dashboard/default/default';

@Component({
  selector: 'app-audit-log',
  templateUrl: './audit-log.component.html',
  styleUrl: './audit-log.component.scss'
})
export class AuditLogComponent {

  public auditLogData = Auditlog;
  public show: boolean = false;

  open() {
    this.show = !this.show
  }

  clickOutside(): void {
    this.show = false
  }

}
