import { Component } from '@angular/core';

@Component({
  selector: 'main',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mi-app';
  saludo = "Empleados desde un Componente";

  nombre = 'Juan Armando';
  edad = 32;
  email = 'corria@gmail.com';
  sueldos = [1700, 1600, 1900];
  activo = true;
  web = 'https://github.com/corria9';
  menor = true;

  esActivo(){
    if(this.activo)
      return 'Trabajador Activo';
    else
      return 'Trabajador Inactivo';
  }

  ultimos3Sueldos(){
    let suma = 0;
    for(let x = 0; x < this.sueldos.length; x++)
      suma += this.sueldos[x];
    return suma;  
  }
}