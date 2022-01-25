import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EncuestaService } from '../../../services/encuesta.service';

@Component({
  selector: 'app-directivo',
  templateUrl: './directivo.component.html',
  styles: [
  ]
})
export class DirectivoComponent implements OnInit {

  
 
  constructor( private encuestaService: EncuestaService){}
  
 
 
  teacher2: string[] = [];
  nombreEvaluador1: string[] = [];
 

  ngOnInit(): void {

    this.encuestaService.getData('teacher2')
            .subscribe(teach => this.teacher2 = teach);

    this.encuestaService.getData('nombreEvaluador1')
            .subscribe(teach => this.nombreEvaluador1 = teach);
  }
  
}




