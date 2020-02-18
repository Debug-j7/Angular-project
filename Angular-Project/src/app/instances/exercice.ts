export class Exercice {
  private dateDebut: string;
  private dateFin: string;
  private budget: number;
  private depense: number;
  private motif: string;

  constructor(motif: string, budget: number, dateFin: string, dateDebut?: string, depense?: number) {
    const date = new Date();
    this.motif = motif;
    this.dateDebut = dateDebut || date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear();
    this.dateFin = dateFin;
    this.budget = budget;
    this.depense = depense || 0;
  }

  getDateDebut() { return this.dateDebut; }

  setDateDebut(date: string) { this.dateDebut = date; }

  getDateFin() { return this.dateFin; }

  setDateFin(date: string) { this.dateFin = date; }

  getBudget(budget: number){ return this.budget; }

  setBudget(budget: number) { this.budget = budget; }

  getDepense() { return this.depense; }

  setDepense(depense: number) { this.depense = depense; }

  getMotif() { return this.motif; }

  setMotif(motif: string) { this.motif = motif; }

}
