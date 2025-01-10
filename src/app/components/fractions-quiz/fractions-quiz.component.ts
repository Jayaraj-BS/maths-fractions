import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-fractions-quiz',
  templateUrl: './fractions-quiz.component.html',
  styleUrls: ['./fractions-quiz.component.css'],
  imports: [CommonModule, MatButtonModule, MatCardModule, MatDialogModule],
  standalone: true,
})

export class FractionsQuizComponent {
  questions = [
    { question: "Which is greater: 1/3 or 1/4?", options: ["1/3", "1/4"], correct: "1/3" },
    { question: "Simplify 8/12", options: ["4/6", "2/3"], correct: "2/3" },
    { question: "What is 1/2 + 1/4?", options: ["3/4", "5/6"], correct: "3/4" },
    { question: "Which fraction is greater: 3/8 or 1/2?", options: ["3/8", "1/2"], correct: "1/2" },
    { question: "Simplify 10/15", options: ["2/3", "5/6"], correct: "2/3" },
    { question: "What is 3/4 - 1/4?", options: ["1/2", "1/4"], correct: "1/2" }
  ];

  currentQuestionIndex = 0;
  score = 0;
  quizCompleted = false;

  constructor(public dialog: MatDialog) { }

  // Handle the answer selection
  answer(option: string) {
    if (option === this.questions[this.currentQuestionIndex].correct) {
      this.score++;
      this.openDialog('Correct!');
    } else {
      this.openDialog('Try again');
    }

    if (this.currentQuestionIndex === this.questions.length - 1) {
      this.quizCompleted = true;
    } else {
      this.nextQuestion();
    }
  }

  // Open dialog to display message
  openDialog(message: string) {
    this.dialog.open(DialogContent, {
      data: { message: message }
    });
  }

  // Navigate to the next question
  nextQuestion() {
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
    }
  }

  // Navigate to the previous question
  prevQuestion() {
    if (this.currentQuestionIndex > 0) {
      this.currentQuestionIndex--;
    }
  }

  // Reset the quiz
  resetQuiz() {
    this.currentQuestionIndex = 0;
    this.score = 0;
    this.quizCompleted = false;
  }
}

// Dialog content component
@Component({
  selector: 'dialog-content',
  template: `
    <h1 mat-dialog-title style="text-align:center; font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;">{{ data.message }}</h1>
    <div mat-dialog-actions style="display: flex; justify-content: flex-end;">
      <button mat-button (click)="closeDialog()">OK</button>
    </div>
  `
})
export class DialogContent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialogRef: MatDialogRef<DialogContent>) { }

  closeDialog() {
    this.dialogRef.close();
  }
}
