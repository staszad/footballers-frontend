import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-football-field',
  templateUrl: './football-field.component.html',
  styleUrls: ['./football-field.component.css'],
})
export class FootballFieldComponent implements OnInit {
  constructor() {}

  @Input() numOfDefs: number = 0;
  @Input() numOfMids: number = 0;
  @Input() numOfStrikers: number = 0;

  players: Array<{ name: string; role: string; _id: string }> = [];

  counter(i: number) {
    return new Array(i);
  }

  uploadPlayers(arr: Array<{ name: string; role: string; _id: string }>) {
    this.players = arr;
    console.log('hej');
    console.log(this.players);
  }

  ngOnInit() {}
}
