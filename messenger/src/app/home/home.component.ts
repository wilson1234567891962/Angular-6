import {Component, OnInit} from '@angular/core';
import {User} from '../interfaces/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  friends: User[];

  constructor() {
    const user: User = {
      nick: 'Prueba de concepto',
      subnick: 'Alfa y beta',
      age: 12,
      friend: false,
    };

    this.friends = [user];
    console.log(user);
  }

  ngOnInit() {
  }

}
