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
  

 
 
  directivos: Directivo[] | null = null;
  nombreEvaluador1: string[] = [];
  tipoEvaluacion1:string = '';
 

  ngOnInit(): void {

    this.initData();
  }

  initData(){
    
    this.encuestaService.getData('directivos')
            .subscribe(teach => this.directivos = teach);

    this.encuestaService.getData('tipoEvaluacion1')
            .subscribe(teach => this.tipoEvaluacion1 = (teach[2].nombre));

    this.encuestaService.getData('nombreEvaluador1')
            .subscribe(teach => this.nombreEvaluador1 = teach);
  }
  
}




