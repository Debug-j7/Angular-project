import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-new-entree',
  templateUrl: './new-entree.component.html',
  styleUrls: ['./new-entree.component.css']
})
export class NewEntreeComponent implements OnInit {

  form: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
  }

  initForm() {
    this.form = this.formBuilder.group({
      date: ['', Validators.required],
      montant: ['', Validators.required]
    });
  }

  onSubmit() {
    const values = this.form.value;
    console.log(values);
  }

}
