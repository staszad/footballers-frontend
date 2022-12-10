import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-football-field',
  templateUrl: './football-field.component.html',
  styleUrls: ['./football-field.component.css'],
})
export class FootballFieldComponent implements OnInit {
  constructor() {}

  @Input() defs: number = 0;
  @Input() mids: number = 0;
  @Input() strikers: number = 0;

  counter(i: number) {
    return new Array(i);
  }

  ngOnInit() {}
}
