import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css',
   '../../assets/bootstrap/css/bootstrap.min.css',
    '../../assets/bootstrap/css/font-awesome.min.css']
})
export class UserAuthComponent implements OnInit {

  form: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.initForm();
  }

  initForm(){
    this.form = this.formBuilder.group({
      login: ['', Validators.required],
      psw: ['', Validators.required]
    })
  }

  onSubmit(){
    const values = this.form.value;
    console.log(values);
  }

}
