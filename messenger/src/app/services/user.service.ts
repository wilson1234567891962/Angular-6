import {Injectable} from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private angularFireDataBase: AngularFireDatabase) {
  }

  getUser() {
    return this.angularFireDataBase.list('/users');
  }

  getUserById(uid) {
    return this.angularFireDataBase.object('/users/' + uid);
  }

  createUser(user) {
    return this.angularFireDataBase.object('/users/' + user.uid).set(user);
  }

  editUser(user) {
    return this.angularFireDataBase.object('/users/' + user.uid).update(user);
  }

  setAvatar(avatar, uid) {
    return this.angularFireDataBase.object('/users/' + uid + '/avatar').set(avatar);
  }
}
