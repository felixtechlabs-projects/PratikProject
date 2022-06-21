import { Component } from '@angular/core';

// decorator
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  // template: '<p> I am learning Angular </p>',
  // styles: [
  //   `p {
  //     font-size: 25px;
  //   }
  //   `
  // ]
})
export class AppComponent {
  title: string = 'PratikProject';
}
