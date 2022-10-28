import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-dado',
  templateUrl: './app-dado.component.html',
  styleUrls: ['./app-dado.component.css']
})
export class AppDadoComponent {
  valor1: number;
  valor2: number;
  valor3: number;
  resultado: string = '';

  constructor() {
    this.valor1 = this.generarAleatorio();
    this.valor2 = this.generarAleatorio();
    this.valor3 = this.generarAleatorio();
  }
  generarAleatorio(): number {
    return Math.trunc(Math.random() * 6) + 1;
  }

  tirar() {
    this.valor1 = this.generarAleatorio();
    this.valor2 = this.generarAleatorio();
    this.valor3 = this.generarAleatorio();

    if (this.valor1 == this.valor2 && this.valor1 == this.valor3) {
      this.resultado = 'Ganó';
    } else {
      this.resultado = 'Perdió';
    }
  }
}
