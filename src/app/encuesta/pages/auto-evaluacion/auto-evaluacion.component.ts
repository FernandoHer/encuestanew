import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-auto-evaluacion',
  templateUrl: './auto-evaluacion.component.html',
  styles: [
  ]
})
export class AutoEvaluacionComponent implements OnInit {

  teachersAutoEvaluation:string[]= [
    'Marco Andrade','Antonio Basurto','Carlos Duarte','Elena Frias','Guadalupe Jácome'
  ]
  searchNewTeacher:string[] = [];
  name:string= '';
  dataBase:string[] = [];

  miFormulario: FormGroup = this.fb.group({
    evaluationType: ['Auto Evaluacion', Validators.required],
    nombre: ['',Validators.required]
  })

 

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  errorCampo(nombre:string){
    
    return this.miFormulario.get(nombre)?.invalid || false;
  }

  saveAutoEvaluation(selectedOption:string){
  
    this.miFormulario.controls['nombre'].setValue(selectedOption);
  
  // TODO : Guardar en la base de datos

    this.searchNewTeacher=[];
    

  }

  buscar( e: KeyboardEvent){
    
     let tempo = this.miFormulario.get('nombre')?.value;
     this.searchNewTeacher = this.teachersAutoEvaluation.filter((opt:string) =>{
          return opt.toLocaleLowerCase().indexOf(tempo.toLocaleLowerCase()) > -1
      
     })
    
  }

  guardar(){
    
    if( this.miFormulario.invalid)
      { return 
      } else if (!this.teachersAutoEvaluation.includes(this.miFormulario.get('nombre')?.value) ){
        console.log('Lo siento ',this.miFormulario.get('nombre')?.value , ' no existe en la base de datos')
        return
      };

      console.log(this.miFormulario.value);

      this.miFormulario.setValue({
        evaluationType: 'Auto Evaluacion',
        nombre: ''
      });
  }
    
 
}
