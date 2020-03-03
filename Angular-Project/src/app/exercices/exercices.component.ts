import { Component, OnInit } from '@angular/core';
import {Exercice} from "../instances/exercice";
import {ExercicesService} from "../exercices.service";
import {FunctionsService} from "../functions.service";
import {UserService} from "../user.service";

@Component({
  selector: 'app-exercices',
  templateUrl: './exercices.component.html',
  styleUrls: ['./exercices.component.css',
    '../../assets/bootstrap/css/bootstrap.css',
    '../../../assets/template2/css/bootstrap.min.css',
    '../../../assets/template2/css/font-awesome.css',
    '../../../assets/template2/css/style.css',
    '../../../assets/template2/css/icon-font.min.css']
})
export class ExercicesComponent implements OnInit {

  exercices: Exercice[] = [];

  constructor(private service: ExercicesService,
              private functionService: FunctionsService,
              private userService: UserService) {
    this.exercices = this.service.getExerciceByIdUser(this.userService.getConnectedIndex());
  }

  ngOnInit() {
  }

  getMontantRestant(index: number) {
    const exercice = this.exercices[index];
    return exercice.getBudget() - exercice.getDepense()
  }

  goodDate(date: Date) {
    return this.functionService.formatDate(date);
  }

  getState(index: number) {
    const exercice = this.exercices[index];
    if(exercice.isFinished()) {
      return 'Finished';
    }
    else if(exercice.isPreparing()){
      return "Preparing";
    }
    else if(exercice.isBeing()){
      return "En cours";
    }
  }

  thereIsAnExercice() {
    if(this.exercices.length !== 0) {
      return true;
    } else {
      return false;
    }
  }
}
