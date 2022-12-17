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

  players: Array<{ name: string; role: string; _id: string; chosen: boolean }> =
    [];
  defs: Array<{ name: string; role: string; _id: string }> = [];
  mids: Array<{ name: string; role: string; _id: string }> = [];
  strikers: Array<{ name: string; role: string; _id: string }> = [];
  gkps: Array<{ name: string; role: string; _id: string }> = [];

  footballers = [
    {
      name: 'Wojciech Szczęsny',
      role: 'goalkeeper',
      _id: '1',
      chosen: false,
    },
    {
      name: 'Łukasz Skorupski',
      role: 'goalkeeper',
      _id: '2',
      chosen: false,
    },
    {
      name: 'Kamil Grabara',
      role: 'goalkeeper',
      _id: '3',
      chosen: false,
    },
    {
      name: 'Kamil Glik',
      role: 'defender',
      _id: '4',
      chosen: false,
    },
    {
      name: 'Jan Bednarek',
      role: 'defender',
      _id: '5',
      chosen: false,
    },
    {
      name: 'JakubKiwior',
      role: 'defender',
      _id: '6',
      chosen: false,
    },
    {
      name: 'Mateusz Wieteska',
      role: 'defender',
      _id: '7',
      chosen: false,
    },
    {
      name: 'Artur Jędrzejczyk',
      role: 'defender',
      _id: '8',
      chosen: false,
    },
    {
      name: 'Robert Gumny',
      role: 'defender',
      _id: '9',
      chosen: false,
    },
    {
      name: 'Nicola Zalewski',
      role: 'defender',
      _id: '10',
      chosen: false,
    },
    {
      name: 'Matty Cash',
      role: 'defender',
      _id: '11',
      chosen: false,
    },
    {
      name: 'Bartosz Bereszyński',
      role: 'defender',
      _id: '12',
      chosen: false,
    },
    {
      name: 'Michał Skóraś',
      role: 'midfielder',
      _id: '13',
      chosen: false,
    },
    {
      name: 'Przemysław Frankowski',
      role: 'midfielder',
      _id: '14',
      chosen: false,
    },
    {
      name: 'Jakub Kamiński',
      role: 'midfielder',
      _id: '15',
      chosen: false,
    },
    {
      name: 'Kamil Grosicki',
      role: 'midfielder',
      _id: '16',
      chosen: false,
    },
    {
      name: 'Piotr Zieliński',
      role: 'midfielder',
      _id: '17',
      chosen: false,
    },
    {
      name: 'Grzegorz Krychowiak',
      role: 'midfielder',
      _id: '18',
      chosen: false,
    },
    {
      name: 'Krystian Bielik',
      role: 'midfielder',
      _id: '19',
      chosen: false,
    },
    {
      name: 'Sebastian Szymański',
      role: 'midfielder',
      _id: '20',
      chosen: false,
    },
    {
      name: 'Damian Szymański',
      role: 'midfielder',
      _id: '21',
      chosen: false,
    },
    {
      name: 'Szymon Żurkowski',
      role: 'midfielder',
      _id: '22',
      chosen: false,
    },
    {
      name: 'Robert Lewandowski',
      role: 'striker',
      _id: '23',
      chosen: false,
    },
    {
      name: 'Arkadiusz Milik',
      role: 'striker',
      _id: '24',
      chosen: false,
    },
    {
      name: 'Karol Świderski',
      role: 'striker',
      _id: '25',
      chosen: false,
    },
    {
      name: 'Krzysztof Piątek',
      role: 'striker',
      _id: '26',
      chosen: false,
    },
  ];

  counter(i: number) {
    return new Array(i);
  }

  upPlayers() {
    this.defs = this.players.filter(
      (player) => player.role == 'defender' && !player.chosen
    );
    this.mids = this.players.filter(
      (player) => player.role == 'midfielder' && !player.chosen
    );
    this.strikers = this.players.filter(
      (player) => player.role == 'striker' && !player.chosen
    );
    this.gkps = this.players.filter(
      (player) => player.role == 'goalkeeper' && !player.chosen
    );
    console.log(this.strikers);
  }

  uploadPlayers(arr: Array<{ _id: string; name: string; role: string }>) {
    arr.forEach((p) => {
      this.players.push({
        name: p.name,
        role: p.role,
        _id: p._id,
        chosen: false,
      });
    });

    this.defs = arr.filter((player) => player.role == 'defender');
    this.mids = arr.filter((player) => player.role == 'midfielder');
    this.strikers = arr.filter((player) => player.role == 'striker');
    this.gkps = arr.filter((player) => player.role == 'goalkeeper');
  }

  changePlayerStatus(_id: string) {
    const index = this.players.findIndex((player) => player._id == _id);
    console.log(_id + ' ' + index);
    this.players[index].chosen = !this.players[index].chosen;
    this.upPlayers();
  }

  ngOnInit() {}
}
