import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FractionsVisualizationComponent } from "../fractions-visualization/fractions-visualization.component";
import { FractionsQuizComponent } from "../fractions-quiz/fractions-quiz.component";
import { PizzaComponent } from '../pizza/pizza.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  standalone: true,
  imports: [CommonModule, PizzaComponent],
})
export class ParentComponent {
  // @HostBinding('class') protected readonly class = 'contents'; // Makes component host as if it was not there, can offer less css headaches. Assumes .contents{display:contents} css class exits
  // constructor() {}
}
