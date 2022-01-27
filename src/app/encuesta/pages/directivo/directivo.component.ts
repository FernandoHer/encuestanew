import { Component, OnInit } from '@angular/core';

import { EncuestaService } from '../../../services/encuesta.service';


interface Directivo 
  {
    codigo: number;
    nombre: string
  }


@Component({
  selector: 'app-directivo',
  templateUrl: './directivo.component.html',
  styles: [
  ]
})
export class DirectivoComponent implements OnInit {

  
 
  constructor( private encuestaService: EncuestaService){}
  

 
 
  directivos: Directivo[] = [
    {codigo: 3001, nombre: "Maria Peñaherrera"},
    {codigo: 3002, nombre: "Lucia Barrionuevo"},
    {codigo: 3003, nombre: "Simon Zambrano"},
    {codigo: 3004, nombre: "Carlos Yepez"},
    {codigo: 3005, nombre: "Omar Ospina"},
    {codigo: 3006, nombre: "Patricio Parra"}
  ];
  nombreEvaluador1: string[] = [];
 

  ngOnInit(): void {

    console.log('directivo', this.directivos)

    // this.encuestaService.getData('teacher2')
    //         .subscribe(teach => this.teacher2 = teach);

    this.encuestaService.getData('nombreEvaluador1')
            .subscribe(teach => this.nombreEvaluador1 = teach);
  }
  
}




