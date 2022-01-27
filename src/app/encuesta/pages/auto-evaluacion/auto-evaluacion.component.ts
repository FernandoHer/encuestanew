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

 
  evaluacion: AutoEvaluacion[] = [
    {codigo: 2001, nombre: "Karla Kelloks"},
    {codigo: 2002, nombre: "Laura Leon"},
    {codigo: 2003, nombre: "Marco Mendoza"},
    {codigo: 2004, nombre: "Noel Naranjo"},
    

  ];

  nombreEvaluador1: string[] = [];
 

  constructor(private encuestaService: EncuestaService) { }

  ngOnInit(): void {
    this.encuestaService.getData('evaluacion')
            .subscribe(teach => this.nombreEvaluador1 = teach);
  }
  
 
}
