import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EncuestaService } from '../../../services/encuesta.service';

@Component({
  selector: 'app-auto-evaluacion',
  templateUrl: './auto-evaluacion.component.html',
  styles: [
  ]
})
export class AutoEvaluacionComponent implements OnInit {

  teacher: string[] =[];
  nombreEvaluador1: string[] = [];
 

  constructor(private encuestaService: EncuestaService) { }

  ngOnInit(): void {
    this.encuestaService.getData('nombreEvaluador1')
            .subscribe(teach => this.nombreEvaluador1 = teach);
  }
  
 
}
