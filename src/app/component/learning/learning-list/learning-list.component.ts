import { Component } from '@angular/core';
import { learningTopData, learningData } from '../../../shared/data/learning/learning';
import { CommonModule } from '@angular/common';
import { LearningFilterComponent } from '../learning-filter/learning-filter.component';

@Component({
  selector: 'app-learning-list',
  standalone: true,
  imports: [CommonModule,LearningFilterComponent],
  templateUrl: './learning-list.component.html',
  styleUrl: './learning-list.component.scss'
})
export class LearningListComponent {

  public learningTopData = learningTopData;
  public learningData = learningData;

}
