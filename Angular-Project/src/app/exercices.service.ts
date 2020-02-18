import { Injectable } from '@angular/core';
import {Exercice} from './instances/exercice';

@Injectable({
  providedIn: 'root'
})
export class ExercicesService {
  exercices: Exercice[];
  constructor() { }

  saveExercice(exercice: Exercice) {
    this.exercices.push(exercice);
  }

  editExercice(id: number, exercice: Exercice) {
    this.exercices[id] = exercice;
  }

  deleteExercice(id: number) {
    this.exercices.slice(id);
  }

  saveDepense(montant: number, index: number) {
    this.exercices[index].setDepense(this.exercices[index].getDepense() + montant);
  }

  getGoodState(index: number): boolean {
     if(this.exercices[index].getBudget() >= this.exercices[index].getDepense()){
       return true;
     }else return false;
  }

  isFinished(index: number): boolean {
    return false;
  }
}
