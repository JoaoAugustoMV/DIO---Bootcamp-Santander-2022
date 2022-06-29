import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './componentes/header/header.component';
import { FormularioUsuarioComponent } from './paginas/usuarios/formulario-usuario/formulario-usuario.component';
import { ListaUsuariosComponent } from './paginas/usuarios/lista-usuarios/lista-usuarios.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataBindingComponent } from './paginas/data-binding/data-binding.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListaUsuariosComponent,
    FormularioUsuarioComponent,
    DataBindingComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
