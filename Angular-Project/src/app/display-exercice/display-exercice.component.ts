import { Component, OnInit } from '@angular/core';
import {Exercice} from "../instances/exercice";
import {ExercicesService} from "../exercices.service";
import {ActivatedRoute} from "@angular/router";
import {Sortie} from "../instances/sortie";
import {SortieService} from "../sortie.service";
import { FunctionsService } from '../functions.service';

@Component({
  selector: 'app-display-exercice',
  templateUrl: './display-exercice.component.html',
  styleUrls: ['./display-exercice.component.css',
  '../../assets/bootstrap/css/bootstrap.css',
  '../../../assets/template2/css/bootstrap.min.css',
  '../../../assets/template2/css/font-awesome.css',
  '../../../assets/template2/css/style.css',
  '../../../assets/template2/css/icon-font.min.css']
})
export class DisplayExerciceComponent implements OnInit {

  private exercice: Exercice;
  private index: number;
  private sorties: Sortie[];

  constructor(private service: ExercicesService,
              private sortieService: SortieService,
              private route: ActivatedRoute,
              private functionsService: FunctionsService) {
                this.exercice = new Exercice("Visites malades", 35000, new Date(2015,10,12));
              }

  ngOnInit() {
    this.index = this.route.snapshot.params['id'];
    //this.exercice = this.service.exercices[this.index];
    this.sorties = this.sortieService.getSortiesExercice(this.exercice.getId());
  }

  goodDate(date: Date) {
    return this.functionsService.formatDate(date);
  }

  getDateJour(): string{
    return this.functionsService.getDateJour();
  }
}
