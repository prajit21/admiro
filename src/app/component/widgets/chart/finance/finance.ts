import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FinanceChart } from '../../../../shared/data/widgets/chart';
import { NgApexchartsModule } from 'ng-apexcharts';


@Component({
    selector: 'app-finance',
    imports: [CommonModule, NgApexchartsModule],
    templateUrl: './finance.html',
    styleUrl: './finance.scss'
})
export class Finance {

  public financesData = FinanceChart;

}
