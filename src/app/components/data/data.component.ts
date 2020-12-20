import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validator, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: []
})
export class DataComponent implements OnInit {

  usuario: object = {
    nombrecompleto : {
      nombre: 'Alexander',
      apellido: 'Nova'
    },
    correo: 'Alex@gmail.com',
    pasatiempos: ['comer','programar', 'dormir']
  }


  forma: FormGroup;
  // Este objeto es el encargado de hacer todo lo del
  // formulario (Valores, datos, validadores, etc)

  constructor() { 

    console.log(this.usuario);
    
    // Bueno ojo a esto;
    // hay que crear un FormGroup dentro de un FormGroup, para anidar FormsGrop:DDD
    this.forma = new FormGroup({

      'nombrecompleto': new FormGroup({
        'nombre': new FormControl('', [Validators.required,
          Validators.minLength(3)
        ]),
// Validacion personalizada, cuando se llama no se ponen los parentesis de metodo, >ESTA SERVERA
        'apellido' : new FormControl('', [Validators.required,
                                          this.palabra])
      }),
      'correo' : new FormControl('', [Validators.required,
                                      Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")
                                    ]),
      'pasatiempos': new FormArray([
        new FormControl('Correr' , Validators.required)
      ])
    });
    // > Ojo aqui arriba con los 



    // Este metodo me permite crear algo como "Inputs", 

    // Cada input__ new FormControk recibe tres parametros,
    // Nombrepor defectos
    // validadores , que pueden ir en forma de arreglo
    // valor Asincrono validacion asincrono
  
    //ESTA COSA AJJAJA esta linea de codigo pone valores por defecto de un objeto
    //this.forma.setValue(this.usuario);
  }

  ngOnInit() {
  }

  addpasatiempo() {
    // VAMOS A PONER UNA ARRAYFORM, Y ESTO SE PONE COMO JAVA.
    // SI, ESTO ME ACUERDA JAVA

  (<FormArray>this.forma.controls['pasatiempos']).push(

    new FormControl('Dormir', Validators.required)
  );
  }

  // Esta validacion  hace que no ponga una palabra especifica en el 
  // campo, algo asi como "este ussuario ya existe"

  palabra(control: FormControl): { [s: string]: boolean } {
    // Ese retorno QUE WTF, pues es para retornar pares de valores

    if (control.value === 'Nova') {

      // A esto hace referencia con pares de valores AHHHHHHH ajjaja
      return {
        // Este nombre no tiene que ser tan largo o si no, no sirve
        // YA ME PASO puese esteeselstring   y no funcion con ese name
        acaesta: true
      }
      
      return null;
    }

  }

  guradarCambios() {

    console.log(this.forma.value);

    console.log("Forma", this.forma.controls['nombrecompleto']);

    // Con esta linea reseteo todos los campos
    // Incluyendo las validacion de Angular ng pristine etc

    // Para mi crear una instacia de datos vacia y asiganarla
    // this.forma.reset({
    //   nombrecompleto : {
    //     nombre: '',
    //     apellido: ''
    //   },
    //   correo: ''
    // });

  }

}
