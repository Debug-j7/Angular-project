import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { EntreesService } from '../entrees.service';
import { FunctionsService } from '../functions.service';
import { Entree } from '../instances/entree';

@Component({
  selector: 'app-new-entree',
  templateUrl: './new-entree.component.html',
  styleUrls: ['./new-entree.component.css',
  '../../assets/bootstrap/css/bootstrap.css',
  '../../../assets/template2/css/bootstrap.min.css',
  '../../../assets/template2/css/font-awesome.css',
  '../../../assets/template2/css/style.css',
  '../../../assets/template2/css/icon-font.min.css']
})
export class NewEntreeComponent implements OnInit {

  form: FormGroup;
  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              private router: Router,
              private service: EntreesService,
              private functionsService: FunctionsService) { }

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
    const date = this.functionsService.strToDate(values['date']);
    const entree = new Entree(date, values['montant'], values['motif'], this.userService.getConnectedIndex());
    this.service.saveEntree(entree);
    this.userService.saveEntree(values['montant']);
    this.router.navigate(['/']);
  }

}
