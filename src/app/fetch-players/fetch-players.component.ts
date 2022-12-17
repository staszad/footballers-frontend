import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { AppService } from '../app.service';

@Component({
  selector: 'app-fetch-players',
  templateUrl: './fetch-players.component.html',
  styleUrls: ['./fetch-players.component.css'],
})
export class FetchPlayersComponent {
  url = 'http://localhost:8080';
  fetchedPlayers: Array<{}> = [];
  players: Array<{ name: string; role: string; _id: string }> = [];
  name = '';

  @Output() fetchedPlayersEv = new EventEmitter<
    Array<{ name: string; role: string; _id: string }>
  >();

  sendFetchedPlayers(
    value: Array<{ name: string; role: string; _id: string }>
  ) {
    this.fetchedPlayersEv.emit(value);
  }

  constructor(private appService: AppService) {
    appService.getAll().subscribe((data) => {
      this.players = data.data.result;
      this.sendFetchedPlayers(this.players);
    });
  }
}
// https://angular.io/guide/http
