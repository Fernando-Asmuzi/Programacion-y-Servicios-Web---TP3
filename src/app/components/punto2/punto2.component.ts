import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-punto2',
  templateUrl: './punto2.component.html',
  styleUrls: ['./punto2.component.scss']
})
export class Punto2Component implements OnInit {
  
  usuario: String;
  organizacion: String;
  solicita: boolean;
  carga : Array<any>;
  informacion: Array<any>; 
  
  constructor() { 
    this.usuario = "";
    this.organizacion = "";
    this.solicita= false;
    this.carga = [this.usuario, this.organizacion, this.solicita]
    this.informacion=[this.carga[0]]              
  }


  ngOnInit(): void {
  }

  cargarDatos(){
     
  }

}
