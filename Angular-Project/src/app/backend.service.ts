import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User} from "./instances/user";
import {Exercice} from "./instances/exercice";
import {Entree} from "./instances/entree";
import {Sortie} from "./instances/sortie";

@Injectable({
  providedIn: 'root'
})
export class BackendService{
  private key;
  private refresh;
  headers = new HttpHeaders({
    'Content-type': 'application/json'
  });
  backendUrl = "http://localhost:8000";
  constructor(private httpClient: HttpClient) {
  }

  getUsers(){
    let users = [];
    this.httpClient.get<User>(this.getUserUrl()).subscribe(
      (datas) => {
        users.push(datas);
      },
      (errors) => {
        console.warn("La requete a echoué");
      }
    );
    return users;
  }

  createUser(user: User){
    user.setSolde(0);
    user.setAvatar('');
    const nuser = JSON.stringify(user);
    console.log(nuser);
    this.httpClient.post(this.getUserUrl(), nuser, {headers: this.headers}).subscribe(
      (datas) => {
        console.log("Enregistrement reussi");
        return true;
      },
      (errors) => {
        console.warn("Enregistrement echoué");
        return false;
      }
    )
  }

  deleteUser(index: number) {
    this.httpClient.delete(this.getUserUrl() + index + "/").subscribe(
      (datas) => {
        console.log("Suppression reussie");
        return true;
      },
      (error) => {
        console.warn("Echec de suppression");
        return false;
      }
    );
  }

  updateuser(user: User, index: number) {
    const nuser = JSON.stringify(user);
    const nurl = this.getUserUrl() + index;
    this.httpClient.put(nurl, nuser, {headers: this.headers}).subscribe(
      (datas) => {
        console.log("Mise à jour reussie");
        return true;
      },
      (error) => {
        console.warn("Echec de mise à jour");
        return false;
      }
    );
  }

  private getUserUrl() {
    return this.backendUrl + "/users/";
  }

  private getExerciceUrl() {
    return this.backendUrl + "/exercices/";
  }

  getExercices() {
    let exercices = [];
    this.httpClient.get<Exercice>(this.getExerciceUrl()).subscribe(
      (datas) => {
        exercices.push(datas);
      },
      (error) => {
        console.warn("La requete a echoué");
      }
    );
    return exercices;
  }

  createExercice(exercice: Exercice) {
    const nexo = JSON.stringify(exercice);
    this.httpClient.post(this.getExerciceUrl(), nexo).subscribe(
      (datas) => {
        console.log("enregistrement reussi");
        return true;
      },
      (error) => {
        console.warn("Enregistrement echoué");
        return false;
      }
    );
  }

  deleteExercice(index: number) {
    this.httpClient.delete(this.getExerciceUrl() + index + "/").subscribe(
      (datas) => {
        console.log("Suppression reussie");
        return true;
      },
      (erreur) => {
        console.warn("Echec de suppression");
        return false;
      }
    );
  }

  updateExercice(exercice: Exercice, index: number) {
    const nexo = JSON.stringify(exercice);
    const nurl = this.getExerciceUrl() + index + "/";
    this.httpClient.put(nurl, nexo).subscribe(
      (datas) => {
        console.log("Mise à jour reussie");
        return true;
      },
      (error) => {
        console.warn("Echec de mise à jour");
      }
    );
  }

  getEntreeUrl() {
    return this.backendUrl + "/entrees/";
  }

  getEntrees() {
    let entrees = [];
    this.httpClient.get(this.getEntreeUrl()).subscribe(
      (datas) => {
        entrees.push(datas);
      },
      error => {
        console.log("La requete a echoué");
      }
    );
    return entrees;
  }

  createEntree(entree: Entree) {
    const nentree = JSON.stringify(entree);
    this.httpClient.post(this.getEntreeUrl(), nentree).subscribe(
      (datas) => {
        console.log("Enregistrement reussi");
        return true;
      },
      (error) => {
        console.warn("Echec d'enregistrement");
        return false;
      }
    );
  }

  deleteEntree(index: number) {
    this.httpClient.delete(this.getEntreeUrl() + index + "/").subscribe(
      (datas) => {
        console.log("Suppression reussie");
        return true;
      },
      (erreur) => {
        console.warn("Echec de suppression");
        return false;
      }
    );
  }

  updateEntree(entree: Exercice, index: number) {
    const nentree = JSON.stringify(entree);
    const nurl = this.getEntreeUrl() + index + "/";
    this.httpClient.put(nurl, nentree).subscribe(
      (datas) => {
        console.log("Mise à jour reussie");
        return true;
      },
      (error) => {
        console.log("Echec de mise à jour");
      }
    );
  }

  getSortieUrl() {
    return this.backendUrl + "/sorties/";
  }

  getSorties() {
    let sorties = [];
    this.httpClient.get<Sortie>(this.getSortieUrl()).subscribe((datas) => {
      sorties.push(datas);
    },
      (erreur) => {
        console.log("Reccuperation de données echouée");
        return sorties;
      });
    return sorties;
  }

  createSortie(sortie: Sortie) {
    const nsortie = JSON.stringify(sortie);
    this.httpClient.post(this.getSortieUrl(), nsortie).subscribe(
      (datas) => {
        console.log("Enregistrement reussi");
        return true;
      },
      (erreur) => {
        console.warn("Enregistrement echoué");
        return false;
      }
    );
  }

  deleteSortie(index: number) {
    this.httpClient.delete(this.getSortieUrl() + index + "/").subscribe(
      (datas) => {
        console.log("Suppression reussie");
        return true;
      },
      (erreur) => {
        console.warn("Suppression echouée");
        return false;
      }
    );
  }

  updateSortie(sortie: Sortie, index: number) {
    const nsortie = JSON.stringify(sortie);
    const nurl = this.getSortieUrl() + index + "/";
    this.httpClient.put(nurl, nsortie).subscribe(
      (datas) => {
        console.log("Mise à jour reussie");
        return true;
      },
      (erreur) => {
        console.warn("Mise à jour echouée");
        return false;
      }
    );
  }

}
