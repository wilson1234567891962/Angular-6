import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';
import {UserService} from '../services/user.service';
import {Router} from '@angular/router';
import {BackendService} from '../services/backend.service';
import {Ricky} from '../interfaces/ricky';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  operation: string = 'login';
  email: string = null;
  password: string = null;
  nick: string = null;

  constructor(private authenticationService: AuthenticationService,
              private userService: UserService, private router: Router, private backend: BackendService) {
  }

  ngOnInit() {
  }

  login() {
    this.authenticationService.loginWithEmail(this.email, this.password)
      .then((data) => {
        this.router.navigate(['home']);
      }).catch((error) => {
      alert('Usuario o clave invalida');
    });
    this.backend.get().subscribe((data: Ricky) => {
      console.log(data);
    }, (error) => {
      console.log(error);
      alert('Ocurrió un error');
    });
  }

  register() {
    this.authenticationService.registerWithEmail(this.email, this.password)
      .then((data) => {
        const user = {
          uid: data.user.uid,
          email: this.email,
          nick: this.nick
        };
        this.userService.createUser(user).then((data2) => {

        }).catch((error) => {
          console.log('Se presento problemas para create user');
        });
      }).catch((error) => {
      console.log(error);
    });
  }
}
