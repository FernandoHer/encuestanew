import { Component, OnInit } from '@angular/core';
import { EncuestaService } from '../../../services/encuesta.service';

interface Profesor 
  {
    codigo: number;
    nombre: string
  }


@Component({
  selector: 'app-profesor',
  templateUrl: './profesor.component.html',
  styles: [
  ]
})
export class ProfesorComponent implements OnInit {


  profesores: Profesor[] | null = null;
  tipoEvaluacion1: string = '';  
  nombreEvaluador1: string[] = [];


   constructor(private encuestaService: EncuestaService) { }

  ngOnInit(): void {

    
    this.initData();
  }

  initData(){
    this.encuestaService.getData('profesores')
            .subscribe(teach => this.profesores = teach);

    this.encuestaService.getData('tipoEvaluacion1')
            .subscribe(teach => this.tipoEvaluacion1 = (teach[1].nombre));

    this.encuestaService.getData('nombreEvaluador1')
            .subscribe(teach => this.nombreEvaluador1 = teach);
  }
  
  
}
