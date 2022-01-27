import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EncuestaService } from '../../../services/encuesta.service';

interface AutoEvaluacion {
  codigo: number;
  nombre: string
}

@Component({
  selector: 'app-auto-evaluacion',
  templateUrl: './auto-evaluacion.component.html',
  styles: [
  ]
})
export class AutoEvaluacionComponent implements OnInit {

 
  evaluacion: AutoEvaluacion[] | null = null;
  tipoEvaluacion1: string = '';
  nombreEvaluador1: string[] | null = null;
 

  constructor(private encuestaService: EncuestaService) { }

  ngOnInit(): void {

    this.initData();


  }

  initData(){
    this.encuestaService.getData('tipoEvaluacion1')
    .subscribe(teach => this.tipoEvaluacion1 = (teach[0].nombre));

    this.encuestaService.getData('nombreEvaluador1')
            .subscribe(teach => {this.nombreEvaluador1 = teach});

  }
  
 
}
