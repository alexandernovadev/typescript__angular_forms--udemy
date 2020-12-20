import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: []
})
export class TemplateComponent implements OnInit {

  // Envia parametros para que el NgModel reciba estos datos
  usuario: Object = {
    nombre: null,
    apellido: null,
    correo: null,
    pais: "",
    sexo: "Hombre",
    acepta: null
  }

  paises = [{
    codigo: "ES",
    nombre: "España"
  },
  {
    codigo: "CAT",
    nombre: "Catalunya"
  }]

  sexos:string[] = ["Hombre", "Mujer", "Indefinido"]


  constructor() { }

  ngOnInit() {
  }

  guardar(forma: NgForm) {
    console.log(forma);
    console.log('Valores',forma.value);

    console.log('Usuario', this.usuario);
    
  }

}
