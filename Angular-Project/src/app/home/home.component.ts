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
  activeExercices: Exercice[];

  constructor(private service: ExercicesService, private router: Router) {
    for (const exo of this.service.exercices) {
      if (exo.isFinished()) {
        this.activeExercices.push(exo);
      }
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

  detailler(index: number) {
    console.log('On va vous afficher l\'integralité de l\'exercice ' + this.index);
    this.router.navigate(['exercice/' + this.index]);

  }

  saveSortie(index: number) {
    console.log('On enregistre la sortie dans l\'exercice numero ' + this.index);
  }
}
