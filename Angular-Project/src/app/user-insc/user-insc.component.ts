import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User} from "../instances/user";
import {UserService} from "../user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-insc',
  templateUrl: './user-insc.component.html',
  styleUrls: ['./user-insc.component.css',
    '../../assets/bootstrap/css/bootstrap.css',
    '../../../assets/template2/css/bootstrap.min.css',
    '../../../assets/template2/css/font-awesome.css',
    '../../../assets/template2/css/style.css',
    '../../../assets/template2/css/icon-font.min.css']
})
export class UserInscComponent implements OnInit {

  userForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              private router: Router) { }

  ngOnInit() {
    this.initForm();
  }
  initForm() {
    this.userForm = this.formBuilder.group({
      login: ['', Validators.required],
      full_name: ['', Validators.required],
      psw: ['', Validators.required],
      conf_psw: ['', Validators.required],
      email: ['', Validators.email]
    });
  }

  onSubmit() {
    const values = this.userForm.value;
    const user = new User(values['full_name'], values['login'], values['psw'], values['email']);
    this.userService.saveUser(user);
    console.log("Enregistrement reuissi");
    this.router.navigate(['/']);
  }
}
