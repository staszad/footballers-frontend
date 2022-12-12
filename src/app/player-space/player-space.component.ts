import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-player-space',
  templateUrl: './player-space.component.html',
  styleUrls: ['./player-space.component.css'],
})
export class PlayerSpaceComponent implements OnInit {
  selected: boolean = false;
  selectedPlayer: { name: string; _id: string } = { name: '', _id: '' };
  choosingActive: boolean = false;

  @Input() gkps: Array<{ name: string; role: string; _id: string }> = [];
  @Input() defs: Array<{ name: string; role: string; _id: string }> = [];
  @Input() mids: Array<{ name: string; role: string; _id: string }> = [];
  @Input() strikers: Array<{ name: string; role: string; _id: string }> = [];

  @Output() changePlayerStatusEv = new EventEmitter<string>();

  getChosenPlayer(player: { name: string; _id: string }) {
    this.selected = true;
    this.changePlayerStatusEv.emit(player._id);
    if (this.selected) this.changePlayerStatusEv.emit(this.selectedPlayer._id);
    this.selectedPlayer = player;
  }

  changeChosingAct(v: boolean) {
    this.choosingActive = v;
  }

  constructor() {}

  ngOnInit(): void {}
}
