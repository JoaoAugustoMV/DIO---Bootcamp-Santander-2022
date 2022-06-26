import { Component } from '@angular/core';

//@Component: Decoraitor
@Component({ // Indica ao Angular certas info
  selector: 'app-root', // Vira uma tag html
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'course-manager'; // No html, estará {{title}}( {{interpolação}})

  name: string = 'Joao'
}
