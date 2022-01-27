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



  alumnos: Alumno[] = [
    {codigo: 1001, nombre: "Gualberto Guano"},
    {codigo: 1002, nombre: "Humberto Hernandez"},
    {codigo: 1003, nombre: "Ignacio Intriago"},
    {codigo: 1004, nombre: "Jairo Jacome"},
    

  ];
  nombreEvaluador1: string[] = [];


   constructor(private encuestaService: EncuestaService) { }

  ngOnInit(): void {

    // this.encuestaService.getData('teacher1')
    //         .subscribe(teach => this.teacher1 = teach);

    this.encuestaService.getData('nombreEvaluador1')
            .subscribe(teach => this.nombreEvaluador1 = teach);
  }

}
