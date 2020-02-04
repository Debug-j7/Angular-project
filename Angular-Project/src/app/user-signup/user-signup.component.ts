import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['../../assets/bootstrap/css/bootstrap.min.css',
    '../../assets/template/css/style.css',
    '../../assets/template/css/font-awesome.css',
    '../../assets/template/css/icon-font.min.css'
  ]
})
export class UserSignupComponent implements OnInit {
  form: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.form = this.formBuilder.group(
      {
        full_name : ['', Validators.required],
        login: ['', Validators.required],
        psw: ['', Validators.required],
        conf_psw: ['', Validators.required],
        email: ['', Validators.email]
      }
    );
  }

  onSubmit() {
    const values = this.form.value;
    console.log(values);
  }


}
