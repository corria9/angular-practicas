import { Component, OnInit } from '@angular/core';
import Articulo from '../models/articulo.model';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent {
  articulos: Array<Articulo> = [];
  codigo = 0;
  descripcion = '';
  precio = 0;

  agregar(){
    if(!this.codigo || !this.descripcion.length || !this.precio){
      alert("Todos los campos son obligatorios.");
      return;
    }

    if(this.buscarArticulo(this.codigo)){
      alert("No se puede agregar este articulo porque ya existe otro con el mismo codigo.")
      return;
    }

    alert("El articulo se agrego de forma correcta.")

    let articulo: Articulo = new Articulo(this.codigo, this.descripcion, this.precio)
    this.articulos.push(articulo);

    this.codigo = 0;
    this.descripcion = '';
    this.precio = 0;
  }

  borrar(codigo: number){
    const resultado = confirm("Desea eliminar este articulo?");

    if(resultado){
      this.articulos = this.articulos.filter(e => e.codigo !== codigo);
    }
  }

  buscarArticulo(codigo: number){
    return this.articulos.find(e => e.codigo === codigo);
  }

  seleccionar(codigo: number){
    let articulo: any = this.buscarArticulo(codigo);

    this.codigo = articulo.codigo;
    this.descripcion = articulo.descripcion;
    this.precio = articulo.precio;
  }

  modificar(){
    if(!this.codigo){
      alert("Debe especificar un codigo.");
      return;
    }

    let articulo : any = this.buscarArticulo(this.codigo);

    if(!articulo){
      alert("No existe un articulo con el codigo especficado.");
      return;
    }

    articulo.descripcion = this.descripcion;
    articulo.precio = this.precio;

    this.limpiarCampos();
    alert("El articulo se actualizo de forma correcta.")
  }

  limpiarCampos(){
    this.codigo = 0;
    this.descripcion = '';
    this.precio = 0;
  }

  hayArticulos(){
    return this.articulos.length > 0;
  }

}