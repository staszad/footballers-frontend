import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { Observable, throwError, of } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { AppService } from '../app.service';

@Component({
  selector: 'app-fetch-players',
  templateUrl: './fetch-players.component.html',
  styleUrls: ['./fetch-players.component.css'],
})
export class FetchPlayersComponent {
  url = 'http://localhost:8080';
  fetchedPlayers: Array<{}> = [];
  players: Array<{ name: string; role: string }> = [];
  name = '';

  constructor(private appService: AppService) {
    appService.getAll().subscribe((data) => {
      this.players = data.data.result;
      console.log(this.players);
      this.players.forEach((v) => {
        this.players.push({ name: v.name, role: v.role });
      });
    });
  }
}
// https://angular.io/guide/http
