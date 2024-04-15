import { Component } from '@angular/core';
import { CryptoAnnotations } from '../../../../shared/data/widgets/chart';

@Component({
  selector: 'app-crypt-annotations',
  templateUrl: './crypt-annotations.component.html',
  styleUrl: './crypt-annotations.component.scss'
})
export class CryptAnnotationsComponent {

  public CryptoannotationsChart = CryptoAnnotations;

}
