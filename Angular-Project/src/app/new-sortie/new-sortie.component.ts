import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Sortie} from "../instances/sortie";
import {FunctionsService} from "../functions.service";
import {UserService} from "../user.service";
import {SortieService} from "../sortie.service";

@Component({
  selector: 'app-new-sortie',
  templateUrl: './new-sortie.component.html',
  styleUrls: ['./new-sortie.component.css',
    '../../assets/bootstrap/css/bootstrap.css',
    '../../../assets/template2/css/bootstrap.min.css',
    '../../../assets/template2/css/font-awesome.css',
    '../../../assets/template2/css/style.css',
    '../../../assets/template2/css/icon-font.min.css']
})
export class NewSortieComponent implements OnInit {

  sortieForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
              private functionService: FunctionsService,
              private userService: UserService,
              private sortieService: SortieService) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.sortieForm = this.formBuilder.group({
      date: ['', Validators.required],
      montant: ['', Validators.required],
      motif: ['']
    });
  }

  onSubmit() {
    const values = this.sortieForm.value;
    const date = this.functionService.strToDate(values['date']);
    const sortie = new Sortie(date, +values['montant'], values['motif'], this.userService.getConnectedIndex());
    this.sortieService.saveSortie(sortie);
  }
}
