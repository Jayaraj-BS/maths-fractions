import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FractionsVisualizationComponent } from "../fractions-visualization/fractions-visualization.component";
import { FractionsQuizComponent } from "../fractions-quiz/fractions-quiz.component";

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css'],
  standalone : true,
  imports: [CommonModule, FractionsVisualizationComponent, FractionsQuizComponent]
})
export class PizzaComponent {
  slices = [
    { color: 'red', fraction: '1/4', selected: false },
    { color: 'green', fraction: '1/4', selected: false },
    { color: 'blue', fraction: '1/4', selected: false },
    { color: 'yellow', fraction: '1/4', selected: false }
  ];

  selectedSlice: string = '';
  gotoFractions : boolean = false
  buttonText : string = 'Perform Quiz'

  onSliceClick(slice : any) {
    this.selectedSlice = `You selected slice: ${slice.fraction}`;
    slice.selected = !slice.selected;
  }

  viewFractions() {
    this.gotoFractions = !this.gotoFractions
    if (this.gotoFractions) {
      this.buttonText = 'About Fractions';
    } else {
      this.buttonText = 'Perform Quiz';
    }
  }
}
