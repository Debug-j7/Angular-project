export class Entree {
  private date: Date;
  private montant: number;
  private motif: string|null;
  private idUser: number;

  constructor(date: Date, montant: number, motif: string, idUser: number) {
    this.setDate(date);
    this.setMontant(montant);
    this.setMotif(motif);
    this.setIdUser(idUser);
  }

  getDate(): Date {
    return this.date;
  }

  setDate(date: Date): void {
    this.date = date;
  }

  getMontant(): number {
    return this.montant;
  }

  setMontant(montant: number): void {
    this.montant = montant;
  }

  getMotif(): string {
    return this.motif;
  }

  setMotif(motif: string): void {
    this.motif = motif;
  }

  getIdUser(): number {
    return this.idUser;
  }

  setIdUser(idUser: number): void {
    this.idUser = idUser;
  }
}

