import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ExercicesService} from "../exercices.service";
import {UserService} from "../user.service";
import {FunctionsService} from "../functions.service";
import {Exercice} from "../instances/exercice";

@Component({
  selector: 'app-new-exercice',
  templateUrl: './new-exercice.component.html',
  styleUrls: ['./new-exercice.component.css',
    '../../assets/bootstrap/css/bootstrap.css',
    '../../../assets/template2/css/bootstrap.min.css',
    '../../../assets/template2/css/font-awesome.css',
    '../../../assets/template2/css/style.css',
    '../../../assets/template2/css/icon-font.min.css']
})
export class NewExerciceComponent implements OnInit {

  exerciceForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
              private service: ExercicesService,
              private userService: UserService,
              private functionsService: FunctionsService) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.exerciceForm = this.formBuilder.group({
      dateDebut: ['', Validators.required],
      dateFin: ['', Validators.required],
      budget: ['', Validators.required],
      motif: ['', Validators.required]
    });
  }

  onSubmit() {
    const values = this.exerciceForm.value;
    const dateDebut = this.functionsService.strToDate(values['dateDebut']);
    const dateFin = this.functionsService.strToDate(values['dateFin']);
    let exercice = new Exercice(values['motif'],values['budget'],dateFin, dateDebut);
    exercice.setIdUser(this.userService.getConnectedIndex());
    this.service.saveExercice(exercice);
  }
}
