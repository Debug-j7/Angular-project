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
    this.users = this.backend.getUsers();
  }

  getConnectedIndex(): number {
    return this.connectedUser;
  }

  saveUser(user: User) {
    const id = this.generateId();
    user.setId(id);
    user.setIdUser(this.getConnectedIndex());
    this.users.push(user);
    this.backend
  }

  editUser(user: User) {
    user.setIdUser(this.getConnectedIndex());
    const id = this.users[this.connectedUser].getid();
    user.setId(id||this.generateId());
    this.users[this.connectedUser] = user;
  }

  deleteUser() {
    this.users.slice(this.connectedUser);
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
    const user = this.getConnectedUser();
    user.setSolde(user.getSolde() + montant);
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
