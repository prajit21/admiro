import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CryptoAnnotations } from '../../../../shared/data/widgets/chart';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
    selector: 'app-crypt-annotations',
    imports: [CommonModule, NgApexchartsModule],
    templateUrl: './crypt-annotations.html',
    styleUrl: './crypt-annotations.scss'
})
export class CryptAnnotations {

  public CryptoannotationsChart = CryptoAnnotations;

}
