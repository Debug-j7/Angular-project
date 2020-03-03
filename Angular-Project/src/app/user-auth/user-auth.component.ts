import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from "../user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css',
   '../../assets/bootstrap/css/bootstrap.min.css',
    '../../assets/bootstrap/css/font-awesome.min.css']
})
export class UserAuthComponent implements OnInit {

  form: FormGroup;
  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.form = this.formBuilder.group({
      login: ['', Validators.required],
      psw: ['', Validators.required]
    });
  }

  onSubmit(){
    const values = this.form.value;
    this.userService.signIn(values['login'], values['psw']);
    this.router.navigate(['']);
    console.log(values);
  }

}
