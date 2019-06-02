import {Component, OnInit} from '@angular/core';
import {User} from '../interfaces/user';
import {UserService} from '../services/user.service';
import {AuthenticationService} from '../services/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  friends: User[];
  user: User;
  query = '';

  constructor(private userService: UserService, private authenticationService: AuthenticationService,
              private router: Router) {
    userService.getUser().valueChanges().subscribe((data: User[]) => {
      this.friends = data;
    }, (eror) => {
      console.log('error en la suscripcion');
    });
    this.getUserById();
  }

  ngOnInit() {
  }

  getUserById() {
    this.authenticationService.getStatus().subscribe((status) => {
      this.userService.getUserById(status.uid).valueChanges().subscribe((data: User) => {
        this.user = data;
        console.log(this.user);
      }, (error) => {
        console.log(error);
      });
    }, (error) => {
      console.log(error);
    });
  }

  logout() {
    this.authenticationService.logOut().then(() => {
      alert('Sesioon Cerrada');
      this.router.navigate(['login']);
    }).catch((error) => {
      console.log(error);
    });
  }

}
