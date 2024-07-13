import { Component } from '@angular/core';
import { Auditlog } from '../../../../shared/data/dashboard/default/default';
import { CommonModule } from '@angular/common';
import { ClickOutsideDirective } from '../../../../shared/directives/outside.directive';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-audit-log',
  standalone: true,
  imports: [CommonModule,ClickOutsideDirective,RouterModule],
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
