import {Component, OnInit} from '@angular/core';
import {User} from '../interfaces/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {
    let user: User = {
      nick: '',
      subnick: '',
      age: 12
    };

    console.log(user);
  }

  ngOnInit() {
  }

}
