import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-user-insc',
  templateUrl: './user-insc.component.html',
  styleUrls: ['./user-insc.component.css',
    '../../assets/bootstrap/css/bootstrap.min.css',
    '../../assets/bootstrap/css/font-awesome.min.css']
})
export class UserInscComponent implements OnInit {

  form: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.form = this.formBuilder.group({
      login: ['', Validators.required],
      full_name: ['', Validators.required],
      psw: ['', Validators.required],
      conf_psw: ['', Validators.required],
      email: ['', Validators.required]
    });
  }

  onSubmit() {
    const values = this.form.value;
    console.log(values);
  }
}
