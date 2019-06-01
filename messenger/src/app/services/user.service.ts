import {Injectable} from '@angular/core';
import {User} from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  friends: User[];

  constructor() {
    const user: User = {
      nick: 'Prueba de concepto',
      subnick: 'Alfa y beta',
      age: 12,
      friend: false,
    };
    const user1: User = {
      nick: 'Prueba de concepto 2',
      subnick: 'Alfa y beta 2',
      age: 122,
      friend: false,
    };
    this.friends = [user, user1];
  }

  getFriends() {
    return this.friends;
  }
}
