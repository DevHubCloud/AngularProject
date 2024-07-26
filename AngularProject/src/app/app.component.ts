//https://v17.angular.io/tutorial/first-app/first-app-lesson-01
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',  // It is templateUrl is for template, make changes there. 
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularProject';
}
