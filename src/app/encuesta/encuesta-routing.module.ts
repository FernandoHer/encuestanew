import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutoEvaluacionComponent } from './pages/auto-evaluacion/auto-evaluacion.component';
import { ProfesorComponent } from './pages/profesor/profesor.component';
import { CruzadoComponent } from './pages/cruzado/cruzado.component';
import { DirectivoComponent } from './pages/directivo/directivo.component';

const routes: Routes = [
  {
    path:'',
    children:[
      {path: 'auto-evaluacion', component:AutoEvaluacionComponent},
      {path: 'profesor', component:ProfesorComponent},
      {path: 'directivo', component:DirectivoComponent},
      {path: 'cruzado', component:CruzadoComponent},
      {path: '**', redirectTo:'auto-evaluacion'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EncuestaRoutingModule { }
