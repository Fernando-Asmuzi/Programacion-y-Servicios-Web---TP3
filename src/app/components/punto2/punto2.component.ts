import { Component, OnInit } from '@angular/core';
import { Asistente } from 'src/app/models/asistente';

@Component({
  selector: 'app-punto2',
  templateUrl: './punto2.component.html',
  styleUrls: ['./punto2.component.scss']
})
export class Punto2Component implements OnInit {
  
  usuario: String;
  organizacion: String;
  solicita: boolean;
  asistente: Asistente; 
  asistentes : Array<Asistente>;
  
  constructor() { 
    this.usuario = "";
    this.organizacion = "";
    this.solicita= false;
    this.asistente = new Asistente();
    this.asistentes = new Array<Asistente>();             
  }


  ngOnInit(): void {
  }

  cargarDatos(){
     this.asistentes.push(this.asistente);
     this.asistente= new Asistente();
  }

}
