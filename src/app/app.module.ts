import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FetchPlayersComponent } from './fetch-players/fetch-players.component';
import { FootballFieldComponent } from './football-field/football-field.component';
import { PlayerSpaceComponent } from './player-space/player-space.component';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [AppComponent, FetchPlayersComponent, FootballFieldComponent, PlayerSpaceComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
