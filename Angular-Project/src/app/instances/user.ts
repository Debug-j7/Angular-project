export class User {
    private nomComplet: string;
    private login: string;
    private password: string;
    private email: string|null;
    private solde: number;
    private id: number;
    private avatar: string;

    constructor(nomComplet: string, login: string, password: string, email?: string){
        this.nomComplet = nomComplet;
        this.login = login;
        this.password = password;
        this.email = email || null;
    }

    getNomComplet(): string {
        return this.nomComplet;
    }

    setNomComplet(nomComplet: string) {
        this.nomComplet = nomComplet;
    }

    getLogin(): string {
        return this.login;
    }

    setLogin(login: string) {
        this.login = login;
    }

    getPassword(): string {
        return this.password;
    }

    setPassword(password: string) {
        this.password = password;
    }

    getEmail(): string {
        return this.email;
    }

    setEmail(email: string) {
        this.email = email;
    }

    getSolde(): number {
        return this.solde;
    }

    setSolde(solde: number) {
        this.solde = solde;
    }

    getid(): number {
        return this.id;
    }

    setId(id: number) {
        this.id = id;
    }

    getAvatar(): string {
      return this.avatar;
    }

    setAvatar(avatar: string): void {
      this.avatar = avatar ;
    }
}
