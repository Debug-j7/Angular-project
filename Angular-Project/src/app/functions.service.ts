import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FunctionsService {

  constructor() { }

  formatDate(date: Date): string {
    let jour = date.getDate().toString(), mois = (date.getMonth() + 1).toString(), annee = date.getFullYear().toString();
    if(jour.length == 1) {
      jour = '0' + jour;
    }
    if(mois.length == 1) {
      mois = '0' + mois;
    }
    return jour + '/' + mois + '/' + annee;
  }

  strToDate(date: string): Date {
    const annee = date.substr(0,4), mois = date.substr(5,2), jour = date.substr(-2,2);
    const newDate = new Date(+annee, +mois-1, +jour);
    return newDate;
  }

  getDateJour(): string {
    const date = new Date();
    return this.formatDate(date);
  }

}
