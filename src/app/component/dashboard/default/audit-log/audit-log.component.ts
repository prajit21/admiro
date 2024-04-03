import { Component } from '@angular/core';
import { Auditlog } from '../../../../shared/data/dashboard/default/default';

@Component({
  selector: 'app-audit-log',
  standalone: true,
  imports: [],
  templateUrl: './audit-log.component.html',
  styleUrl: './audit-log.component.scss'
})
export class AuditLogComponent {

  public auditLogData = Auditlog;

}
