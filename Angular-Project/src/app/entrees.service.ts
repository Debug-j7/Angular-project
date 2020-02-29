import { Injectable } from '@angular/core';
import { Entree } from './instances/entree';

@Injectable({
  providedIn: 'root'
})
export class EntreesService {
  private entrees: Entree[];
  constructor() { }

  saveEntree(entree: Entree): void {
    this.entrees.push(entree);
  }

  editEntree(entree: Entree, index: number): void {
    this.entrees[index] = entree;
  }

  deleteEntree(index: number): void {
    this.entrees.slice(index);
  }

  getEntreesByIdUser(id: number): Entree[] {
    let entrees: Entree[] = [];
    this.entrees.forEach((value, index, tableau) => {
      if (value.getIdUser() === id) {
        entrees.push(value);
      }
    });
    return entrees;
  }
}
