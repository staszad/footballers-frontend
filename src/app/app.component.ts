import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  numOfDefs = 0;
  numOfMids = 0;
  numOfStrikers = 0;
  numOfPlayers = this.numOfDefs + this.numOfMids + this.numOfStrikers;
}
