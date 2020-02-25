export class Exercice {
  private dateDebut: Date;
  private dateFin: Date;
  private budget: number;
  private depense: number;
  private motif: string;
  private id: number;

  constructor(motif: string, budget: number, dateFin: Date, dateDebut?: Date, depense?: number) {
    const date = new Date();
    this.motif = motif;
    this.dateDebut = dateDebut || new Date();
    this.dateFin = dateFin;
    this.budget = budget;
    this.depense = depense || 0;
  }

  getDateDebut() { return this.dateDebut; }

  setDateDebut(date: Date) { this.dateDebut = date; }

  getDateFin() { return this.dateFin; }

  setDateFin(date: Date) { this.dateFin = date; }

  getBudget() { return this.budget; }

  setBudget(budget: number) { this.budget = budget; }

  getDepense() { return this.depense; }

  setDepense(depense: number) { this.depense = depense; }

  getMotif() { return this.motif; }

  setMotif(motif: string) { this.motif = motif; }

  getId(){
    return this.id;
  }

  setId(id: number){
    this.id = id;
  }

  isFinished() {
    const dateJour = new Date();
    if (dateJour.valueOf() > this.getDateFin().valueOf()) {
      return true;
    } else {
      return false;
    }
  }

}
