import { Component, OnInit } from '@angular/core';
import { Entree } from '../instances/entree';
import { EntreesService } from '../entrees.service';
import { UserService } from '../user.service';
import { FunctionsService } from '../functions.service';

@Component({
  selector: 'app-entrees',
  templateUrl: './entrees.component.html',
  styleUrls: ['./entrees.component.css',
  '../../assets/bootstrap/css/bootstrap.css',
  '../../../assets/template2/css/bootstrap.min.css',
  '../../../assets/template2/css/font-awesome.css',
  '../../../assets/template2/css/style.css',
  '../../../assets/template2/css/icon-font.min.css']
})
export class EntreesComponent implements OnInit {

  entrees: Entree[];

  constructor(private service: EntreesService, private userService: UserService, private functionService: FunctionsService) {
    this.entrees = this.service.getEntreesByIdUser(this.userService.getConnectedIndex());
   }

  ngOnInit() {
  }

  goodDate(date: Date): string {
    return this.functionService.formatDate(date);
  }

  thereIsAnEntree() {
    return (this.entrees.length !== 0)
  }


}
