import { InterpolationConfig } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { EncuestaService } from 'src/app/services/encuesta.service';


interface Alumno 
  {
    codigo: number;
    nombre: string
  }

@Component({
  selector: 'app-cruzado',
  templateUrl: './cruzado.component.html',
  styles: [
  ]
})
export class CruzadoComponent implements OnInit {



  alumnos: Alumno[] | null = null;
  nombreEvaluador1: string[] = [];
  tipoEvaluacion1: string  = '';

   constructor(private encuestaService: EncuestaService) { }

  ngOnInit(): void {

    this.initData()
    
  }



  initData(){
    this.encuestaService.getData('alumnos')
            .subscribe(teach => this.alumnos = teach);

    this.encuestaService.getData('tipoEvaluacion1')
            .subscribe(teach => this.tipoEvaluacion1 = (teach[3].nombre));

    this.encuestaService.getData('nombreEvaluador1')
            .subscribe(teach => this.nombreEvaluador1 = teach);
  }

}


