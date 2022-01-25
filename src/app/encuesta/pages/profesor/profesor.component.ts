import { Component, OnInit } from '@angular/core';
import { EncuestaService } from '../../../services/encuesta.service';

@Component({
  selector: 'app-profesor',
  templateUrl: './profesor.component.html',
  styles: [
  ]
})
export class ProfesorComponent implements OnInit {


  teacher3: string[] = [];
  nombreEvaluador1: string[] = [];


   constructor(private encuestaService: EncuestaService) { }

  ngOnInit(): void {

    this.encuestaService.getData('teacher3')
            .subscribe(teach => this.teacher3 = teach);

    this.encuestaService.getData('nombreEvaluador1')
            .subscribe(teach => this.nombreEvaluador1 = teach);
  }
  
}
