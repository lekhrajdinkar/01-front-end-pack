import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular 12';

  constructor(){}
links=[
  {url: 'http', text:'http'},
  {url: 'directive', text:'directive'}
]
}
