import { Component, OnInit } from '@angular/core';

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

  index: number = 0;
  date = new Date();
  dateDay = this.date.getDate() + '/' + this.date.getMonth() + '/' + this.date.getFullYear();
  exercices = [
    {
      dateDebut: '16/01/2017',
      dateFin: '27/03/2020',
      resteJ: 86,
      Motif : 'Cours',
      depense: 56000
    },
    {
      dateDebut: '06/05/2089',
      dateFin: '01/08/2020',
      resteJ: 85,
      Motif : 'Habillement',
      depense: 98630
    },
    {
      dateDebut: '22/07/2078',
      dateFin: '01/09/1939',
      resteJ: 188,
      Motif : 'Alimentation',
      depense: 38520
    },
    {
      dateDebut: '07/07/2007',
      dateFin: '08/08/2008',
      resteJ: 122,
      Motif : 'Losir',
      depense: 73000
    },
  ];

  constructor() { }

  ngOnInit() {
  }

  incrementIndex() {
    if (this.exercices[++this.index].isFinished()) this.incrementIndex();
    if (this.index >= this.exercices.length) this.index = this.exercices.length - 1;
  }

  decrementIndex() {
    this.index--;
    if (this.index <= 0) this.index = 0;
  }

  detailler(index: number) {
    console.log('On va vous afficher l\'integralité de l\'exercice ' + this.index);
  }

  saveSortie(index: number) {
    console.log('On enregistre la sortie dans l\'exercice numero ' + this.index);
  }
}
