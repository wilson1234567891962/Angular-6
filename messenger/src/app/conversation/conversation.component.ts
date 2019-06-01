import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {User} from '../interfaces/user';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.css']
})
export class ConversationComponent implements OnInit {
  friends: User[];
  friendId: any;
  friend: User;
  price: number = 78818;
  today: any = Date.now();

  constructor(private activatedRoute: ActivatedRoute, private userService: UserService) {
    this.friendId = this.activatedRoute.snapshot.params['nick'];
    this.friends = userService.getFriends();
    this.friend = this.friends.find((record) => record.nick === this.friendId);
    console.log(this.friend);
  }

  ngOnInit() {
  }

}
