import { Component, OnInit } from '@angular/core';
import {UserService} from "../user.service";
import {User} from "../instances/user";
import {Route, Router} from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css',
    '../../assets/bootstrap/css/bootstrap.css',
    '../../../assets/template2/css/bootstrap.min.css',
    '../../../assets/template2/css/font-awesome.css',
    '../../../assets/template2/css/style.css',
    '../../../assets/template2/css/icon-font.min.css']
})
export class ProfileComponent implements OnInit {

  private user: User;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.loadUserDatas();
  }

  loadUserDatas() {
    this.user = this.userService.getConnectedUser() || new User("Anonymous geek", "Anonymous", "MyPassword", "MyEmailAdress");
    let image = new Image();
    image.src = "../../assets/img/avatars/default.png";
    image.alt = this.user.getLogin();
  }

  editProfile() {

  }

  signout() {
    this.userService.signOut();
    this.router.navigate(['/connexion']);
  }

  deleteProfile() {
    this.userService.deleteUser();
    this.router.navigate(['/connexion']);
  }

}
