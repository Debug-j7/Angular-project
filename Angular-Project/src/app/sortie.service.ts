import { Injectable } from '@angular/core';
import {Sortie} from "./instances/sortie";

@Injectable({
  providedIn: 'root'
})
export class SortieService {
  sorties: Sortie[];

  constructor() { }

  getSortiesExercice(idExo: number): Sortie[]{
    let retour: Sortie[];
    for(const sort of this.sorties){
      if(sort.getIdExercice() === idExo) {
        retour.push(sort);
      }
    }
    return retour;
  }

  saveSortie(sortie: Sortie) {
    this.sorties.push(sortie);
  }

  editSortie(sortie: Sortie, id: number) {
    this.sorties['id'] = sortie;
  }



}
