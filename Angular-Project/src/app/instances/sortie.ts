export class Sortie{
  private date: Date;
  private montant: number;
  private idExercice: number;
  private motif: string | null;

  constructor(date: Date, montant: number, motif: string, idExo: number) {
    this.date = date || new Date();
    this.montant = montant;
    this.motif = motif;
    this.idExercice = idExo;
  }

  getDate() {
    return this.date;
  }

  setDate(date: Date) {
    this.date = date;
  }

  getMontant() {
    return this.montant;
  }

  setMontant(montant: number){
    this.montant = montant;
  }

  getMotif() {
    return this.motif;
  }

  setMotif(motif: string) {
    this.motif = motif;
  }

  getIdExercice() {
    return this.idExercice;
  }

  setIdExercice(newId: number) {
    this.idExercice = newId;
  }
}
