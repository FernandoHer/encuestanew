import { Component, OnInit } from '@angular/core';

interface MenuItem {
  route: string,
  text: string
}


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
    `
  ]
})
export class MenuComponent implements OnInit {


  menu: MenuItem[] = [
    {route: './encuesta/auto-evaluacion', text:'Auto Evaluacion'},
    {route: './encuesta/directivo', text:'Directivo'},
    {route: './encuesta/profesor', text:'Profesor'},
    {route: './encuesta/cruzado', text:'Cruzado'},
  ]

  constructor() { }

  ngOnInit(): void {
  }



}
