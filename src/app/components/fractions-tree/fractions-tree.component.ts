// fractions-tree.component.ts
import { Component, OnInit } from '@angular/core';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fractions-tree',
  templateUrl: './fractions-tree.component.html',
  styleUrls: ['./fractions-tree.component.css'],
  imports : [MatButtonModule, MatCardModule, CommonModule],
  standalone : true
})
export class FractionsTreeComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  currentStep: string = 'start';

  decisionTree : any = {
    start: {
      question: "Do you know what a numerator and denominator are?",
      options: [
        { text: "Yes", nextStep: "simplify" },
        { text: "No", nextStep: "explainFraction" }
      ]
    },
    explainFraction: {
      content: "A fraction has two parts: the numerator (top number) and denominator (bottom number). For example, in 3/4, 3 is the numerator, and 4 is the denominator.",
      options: [{ text: "Next", nextStep: "simplify" }]
    },
    simplify: {
      question: "Can the numerator and denominator be divided by the same number?",
      options: [
        { text: "Yes", nextStep: "simplifyFurther" },
        { text: "No", nextStep: "end" }
      ]
    },
    simplifyFurther: {
      content: "Divide both numerator and denominator by their greatest common factor (GCF). For example, 6/9 simplifies to 2/3.",
      options: [{ text: "Finish", nextStep: "end" }]
    },
    end: {
      content: "Great job! You’ve completed this decision tree for simplifying fractions.",
      options: []
    }
  };

  proceed(nextStep: string) {
    this.currentStep = nextStep;
  }
}
