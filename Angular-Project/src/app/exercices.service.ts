import { Injectable } from '@angular/core';
import {Exercice} from './instances/exercice';

@Injectable({
  providedIn: 'root'
})
export class ExercicesService {
  exercices: Exercice[] = [];
  constructor() { }

  saveExercice(exercice: Exercice) {
    const id = this.generateId();
    exercice.setId(id);
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

  private existsExercice(id: number){
    for(let exo of this.exercices){
      if(exo.getId() == id) return true;
    }
    return false;
  }

  private generateId(){
    let id = 1;
    while(id){
      if(!this.existsExercice(id)){
        return id;
      }
      id++;
    }
  }
}
