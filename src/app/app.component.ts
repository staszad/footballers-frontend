import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  numOfDefs = 0;
  numOfMids = 0;
  numOfStrikers = 0;
  numOfPlayers = this.numOfDefs + this.numOfMids + this.numOfStrikers;
}
