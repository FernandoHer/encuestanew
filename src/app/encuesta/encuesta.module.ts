import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EncuestaRoutingModule } from './encuesta-routing.module';
import { AutoEvaluacionComponent } from './pages/auto-evaluacion/auto-evaluacion.component';
import { ProfesorComponent } from './pages/profesor/profesor.component';
import { DirectivoComponent } from './pages/directivo/directivo.component';
import { CruzadoComponent } from './pages/cruzado/cruzado.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EncuestaComponent } from './component/encuesta/encuesta.component';



@NgModule({
  declarations: [
    AutoEvaluacionComponent,
    ProfesorComponent,
    DirectivoComponent,
    CruzadoComponent,
    EncuestaComponent
  ],
  imports: [
    CommonModule,
    EncuestaRoutingModule,
    ReactiveFormsModule,
    
  ]
})
export class EncuestaModule { }
