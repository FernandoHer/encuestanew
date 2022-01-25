import { Component, OnInit } from '@angular/core';
import { EncuestaService } from 'src/app/services/encuesta.service';

@Component({
  selector: 'app-cruzado',
  templateUrl: './cruzado.component.html',
  styles: [
  ]
})
export class CruzadoComponent implements OnInit {


  teacher1: string[] = [];
  nombreEvaluador1: string[] = [];


   constructor(private encuestaService: EncuestaService) { }

  ngOnInit(): void {

    this.encuestaService.getData('teacher1')
            .subscribe(teach => this.teacher1 = teach);

    this.encuestaService.getData('nombreEvaluador1')
            .subscribe(teach => this.nombreEvaluador1 = teach);
  }

}
