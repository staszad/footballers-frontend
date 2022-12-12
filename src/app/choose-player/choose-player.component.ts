import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-choose-player',
  templateUrl: './choose-player.component.html',
  styleUrls: ['./choose-player.component.css'],
})
export class ChoosePlayerComponent implements OnInit {
  gkActive: boolean = false;
  defActive: boolean = false;
  midActive: boolean = false;
  strActive: boolean = false;

  changeGkps() {
    this.gkActive = !this.gkActive;
  }
  changeDefs() {
    this.defActive = !this.defActive;
  }
  changeMids() {
    this.midActive = !this.midActive;
  }
  changeStrs() {
    this.strActive = !this.strActive;
  }

  @Input() gkps: Array<{ name: string; role: string; _id: string }> = [];
  @Input() defs: Array<{ name: string; role: string; _id: string }> = [];
  @Input() mids: Array<{ name: string; role: string; _id: string }> = [];
  @Input() strikers: Array<{ name: string; role: string; _id: string }> = [];

  @Output() exit = new EventEmitter<boolean>();

  @Output() choose = new EventEmitter<{ name: string; _id: string }>();

  cancel() {
    this.exit.emit(false);
  }

  proceedChosing(player: { name: string; _id: string; role: string }) {
    this.choose.emit(player);
    this.exit.emit(false);
  }

  constructor() {}

  ngOnInit(): void {}
}
