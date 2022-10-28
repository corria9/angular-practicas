import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent {
  articulos = [];
  codigo = 0;
  descripcion = '';
  precio = 0;

  agregar(){
    if(this.codigo || this.descripcion || this.precio){
      alert("Todos los campos son obligatorios.");
      return;
    }
  }

}
