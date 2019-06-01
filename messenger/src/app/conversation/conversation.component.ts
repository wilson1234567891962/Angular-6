import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {User} from '../interfaces/user';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.css']
})
export class ConversationComponent implements OnInit {
  friends: User[];
  friendId: any;
  friend: User;

  constructor(private activatedRoute: ActivatedRoute) {
    this.friendId = this.activatedRoute.snapshot.params['nick'];

    const user: User = {
      nick: 'Prueba de concepto',
      subnick: 'Alfa y beta',
      age: 12,
      friend: false,
    };

    this.friends = [user];
    this.friend = this.friends.find((record) => {
      return record.nick === this.friendId;
    });
    console.log(this.friend);
  }

  ngOnInit() {
  }

}
