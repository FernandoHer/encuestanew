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


  profesores: Profesor[] = [];

  
  nombreEvaluador1: string[] = [];


   constructor(private encuestaService: EncuestaService) { }

  ngOnInit(): void {

    
    this.encuestaService.getData('profesores')
            .subscribe(teach =>  {
              this.profesores = teach;
              console.log(this.profesores);
            });

    this.encuestaService.getData('nombreEvaluador1')
            .subscribe(teach => this.nombreEvaluador1 = teach);
  }
  
}
