import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styles: [
  ]
})
export class EncuestaComponent implements OnInit {


  @Input() nombreEvaluador1: string[] =[];
  @Input() teacher: string[] =[]



  miFormulario:FormGroup = this.fb.group(
    {
      tipoEvaluacion: ['Evaluar un Directivo',Validators.required],
      nombreEvaluador: ['',Validators.required],
      personasAEvaluar: this.fb.array ([ ])
    }
  )
  
 
 
  nuevoPersonasAEvaluar: FormControl =this.fb.control('',Validators.required);
  optionList:string[] = [];
  listPersons:string[] = [];
  tipoEvaluacion1:string[] = [];
  

  get personasAEvaluarArr(){
    return this.miFormulario.get('personasAEvaluar') as FormArray;
  }


  index:number = 0


  constructor(private fb:FormBuilder) { }

  

  ngOnInit(): void {
    
  }

  agregarFavorito(selectedOption:string){

    if(this.personasAEvaluarArr.value.includes(selectedOption)){
      return console.log('Lo siento esta persona ya fue seleccionada')
    }
    
    this.personasAEvaluarArr.push(this.fb.control(selectedOption));
    this.nuevoPersonasAEvaluar.reset();
    this.optionList=[];
  }

   borrar(index:number){
    console.log(this.miFormulario.controls['personasAEvaluar'].value[index]);
    this.personasAEvaluarArr.removeAt(index);
  };

  
  

  setAndFilterOptionList(e: KeyboardEvent){

    let inputValue = this.nuevoPersonasAEvaluar.value;
    this.listPersons = this.teacher;
    
    this.optionList = this.listPersons.filter((opt:string) => {
          return opt.toLocaleLowerCase().indexOf(inputValue.toLocaleLowerCase()) > -1
    })
      
   }

  

  guardar(){
    if( this.miFormulario.invalid){ return };
    const tempo =this.miFormulario.get('personasAEvaluar')?.value
    if( tempo.length === 0){ 
      console.log('No existe persona a evaluar');
      return 
    };
    console.log (this.miFormulario.value);
    this.personasAEvaluarArr.clear();
    this.miFormulario.setValue({
      tipoEvaluacion: 'Evaluar un Directivo',
      nombreEvaluador: '',
      personasAEvaluar: []
    });
    this.listPersons=[];
    this.optionList=[];
      
  }


}
