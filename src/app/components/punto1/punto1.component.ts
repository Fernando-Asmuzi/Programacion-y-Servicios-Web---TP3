import { Component, OnInit } from '@angular/core';
//import { Modal } from 'bootstrap';

@Component({
  selector: 'app-punto1',
  templateUrl: './punto1.component.html',
  styleUrls: ['./punto1.component.scss']
})
export class Punto1Component implements OnInit {

  remitente: String;
  destinatario: String;
  mensaje: String;
 
  //testModal: Modal | undefined;

  constructor() {
     this.remitente = "";
     this.destinatario = "";
     this.mensaje = "";
     
   }

  ngOnInit(): void {
  }

  public enviarMensaje(){
      //this.testModal = new bootstrap.Modal(document.getElementById("contenedor-modal")),{
       // keyboard:false 
      //}
      //this.testModal?.show(); 
      alert("Remitente: " + this.remitente + "; Destinatario: " + this.destinatario + "; Mensaje: " + this.mensaje);
      this.limpiarTodo();
     
  }

  public limpiarTodo(){
    this.remitente = "";
    this.destinatario = "";
    this.mensaje = "";
  }
  public limpiarMensaje(){
    this.mensaje = "";
  }
}
