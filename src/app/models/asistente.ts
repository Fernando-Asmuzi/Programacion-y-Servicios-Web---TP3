export class Asistente {
    usuario: string;
    organizacion: string;
    solicita: boolean;

    constructor() {
        this.usuario = "";
        this.organizacion = "";
        this.solicita = false;
    }
    asistente(usuario:string, organizacion:string, solicita: boolean){
        this.usuario = usuario;
        this.organizacion = organizacion;
        this.solicita = solicita;
    }
}
