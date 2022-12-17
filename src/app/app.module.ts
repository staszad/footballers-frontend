import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FetchPlayersComponent } from './fetch-players/fetch-players.component';
import { FootballFieldComponent } from './football-field/football-field.component';
import { PlayerSpaceComponent } from './player-space/player-space.component';
import { ChoosePlayerComponent } from './choose-player/choose-player.component';
import { PhotosComponent } from './photos/photos.component';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [AppComponent, FetchPlayersComponent, FootballFieldComponent, PlayerSpaceComponent, ChoosePlayerComponent, PhotosComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
