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
     this.carga[0]=this.usuario;
     this.carga[1]=this.organizacion;
     this.carga[2]=this.solicita;
     alert(this.usuario);
     alert(this.organizacion);
     this.informacion.push(this.carga);
     alert(this.carga[0]);
     alert(this.carga[1]);
     alert(this.carga[2]);
  }

}
