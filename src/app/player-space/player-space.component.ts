import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player-space',
  templateUrl: './player-space.component.html',
  styleUrls: ['./player-space.component.css'],
})
export class PlayerSpaceComponent implements OnInit {
  selected: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
