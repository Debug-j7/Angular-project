import { Component } from '@angular/core';
import {UserService} from "./user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css',
    '../assets/bootstrap/css/bootstrap.min.css',
    '../../assets/template2/css/bootstrap.min.css',
    '../../assets/template2/css/font-awesome.css',
    '../../assets/template2/css/style.css',
    '../../assets/template2/css/icon-font.min.css'
  ]
})
export class AppComponent {
  title = 'Angular-Project';
  annee = new Date().getFullYear();

  constructor(private userService: UserService, private router: Router){}

  logout() {
    this.userService.signOut();
    this.router.navigate(['/connexion'])
  }
}
