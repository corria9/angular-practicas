import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { ContadorComponent } from './contador/contador.component';
import { FormsModule } from '@angular/forms';
import { TablaComponent } from './tabla/tabla.component';
import { DadoComponent } from './dado/dado.component';
import { AppDadoComponent } from './app-dado/app-dado.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpleadosComponent,
    EmpleadoComponent,
    ContadorComponent,
    TablaComponent,
    DadoComponent,
    AppDadoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
