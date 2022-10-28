import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent {

  contador = 0;

  incrementar(){
    this.contador++;
  }

  decrementar(){
    this.contador--;
  }

  nombre = 'Juan Armando';
  apellido='Coria Fierros';

}
