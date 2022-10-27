import { Component } from '@angular/core';

@Component({
  selector: 'main',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mi-app';

  saludo = "Hola, soy un texto desde el template"
}
