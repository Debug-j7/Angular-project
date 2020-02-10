import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css',
    '../../assets/bootstrap/css/bootstrap.css',
    '../../../assets/template/plugins/fontawesome-free/css/all.min.css',
    '../../../assets/template/plugins/sweetalert2/sweetalert2.min.css',
    '../../../assets/template/dist/css/adminlte.min.css']
})
export class HomeComponent implements OnInit {

  index: number = 0;
  exercices = [
    {
      dateDebut: '16/01/2017',
      dateFin: '27/03/2020',
      dateDay:  '01/01/2020',
      resteJ: 86,
      Motif : "Cours"
    },
    {
      dateDebut: '06/05/2089',
      dateFin: '01/08/2020',
      dateDay:  '03/02/2020',
      resteJ: 85,
      Motif : "Habillement"
    },
    {
      dateDebut: '22/07/2078',
      dateFin: '01/09/1939',
      dateDay:  '25/12/1956',
      resteJ: 188,
      Motif : "Alimentation"
    },
    {
      dateDebut: '07/07/2007',
      dateFin: '08/08/2008',
      dateDay:  '01/01/2020',
      resteJ: 122,
      Motif : "Losir"
    },
  ]

  constructor() { }

  ngOnInit() {
  }

  incrementIndex(){
    this.index++;
    if(this.index >= this.exercices.length) this.index = this.exercices.length - 1;
  }

  decrementIndex(){
    this.index--;
    if(this.index <= 0) this.index = 0;
  }

  detailler(index: number){
    console.log("On va vous afficher l'integralité de l'exrcice "+index);
  }

}
