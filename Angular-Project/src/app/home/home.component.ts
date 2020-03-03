import { Component, OnInit } from '@angular/core';
import {Exercice} from '../instances/exercice';
import {ExercicesService} from '../exercices.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css',
    '../../assets/bootstrap/css/bootstrap.css',
    '../../../assets/template2/css/bootstrap.min.css',
    '../../../assets/template2/css/font-awesome.css',
    '../../../assets/template2/css/style.css',
    '../../../assets/template2/css/icon-font.min.css'
  ]
})
export class HomeComponent implements OnInit {

  index = 0;
  date = new Date();
  dateDay = this.date.getDate() + '/' + this.date.getMonth() + '/' + this.date.getFullYear();
  activeExercices: Exercice[] = [];

  constructor(private service: ExercicesService,
              private router: Router) {
    this.service.exercices.forEach((value,index,array) => {
      if(!value.isFinished()) {
        this.activeExercices.push(value);
      }
    });
    if(this.activeExercices.length === 0) {
      this.index = -1;
    }
  }

  ngOnInit() {
  }

  incrementIndex() {
    this.index++;
    if(this.index >= this.activeExercices.length) {
      this.index = this.activeExercices.length -1;
    }
  }

  decrementIndex() {
    this.index--;
    if (this.index < 0) {
      this.index = 0;
    }
  }

  detailler() {
    console.log('On va vous afficher l\'integralité de l\'exercice ' + this.index);
    this.router.navigate(['exercice/' + this.index]);

  }

  saveSortie() {
    this.router.navigate(['/save-sortie/' + this.indexOfExercice()]);
    console.log('On enregistre la sortie dans l\'exercice numero ' + this.index);
  }

  private thereIsActivateExercice() {
    if(this.activeExercices.length > 0) {
      return true;
    } else {
      return false;
    }
  }

  private indexOfExercice() {
    return this.service.exercices.indexOf(this.activeExercices[this.index]);
  }

  montantRestant() {
    const exercice = this.activeExercices[this.index];
    return exercice.getBudget() - exercice.getDepense();
  }
}
