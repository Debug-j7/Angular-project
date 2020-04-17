import { Injectable } from '@angular/core';
import { User } from './instances/user';
import {BackendService} from "./backend.service";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private connectedUser = -1;
  private users: User[];
  constructor(private backend: BackendService) {
    this.refreshDatas();
  }

  refreshDatas() {
    this.users = this.backend.getUsers();
  }

  getConnectedIndex(): number {
    return this.connectedUser;
  }

  saveUser(user: User) {
    this.backend.createUser(user);
    this.refreshDatas();
  }

  editUser(user: User) {
    this.backend.updateuser(user, this.connectedUser);
    this.refreshDatas();
  }

  deleteUser() {
    this.backend.deleteUser(this.connectedUser);
    this.refreshDatas();
  }

  signIn(login: string, password: string): boolean {
    for(const user of this.users) {
      if((user.getLogin() === login) && (user.getPassword() === password)) {
        this.connectedUser = this.users.indexOf(user);
        return true;
      }
    }
    return false;
  }

  signOut() {
    this.connectedUser = -1;
  }

  getConnectedUser() {
    if(this.connectedUser < 0) {
      return null;
    }
    return this.users[this.connectedUser];
  }

  saveEntree(montant) {
    let user = this.getConnectedUser();
    user.setSolde(user.getSolde() + montant);
    this.backend.updateuser(user, this.connectedUser);
    this.refreshDatas();
  }

  private existsId(id: number): boolean {
    for (const user of this.users) {
      if (user.getid() === id) {
        return true;
      }
    }
    return false;
  }

  private generateId() {
    let id = 1;
    while (id) {
      if (!(this.existsId(id))) {
        return id;
      }
      id++;
    }
  }
}
