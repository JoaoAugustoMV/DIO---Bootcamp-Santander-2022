import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatInputModule} from '@angular/material/input'
import { MatCardModule } from '@angular/material/card'
import { MatGridListModule} from '@angular/material/grid-list'

import { HeaderComponent } from './componentes/header/header.component';
import { FormularioUsuarioComponent } from './paginas/usuarios/formulario-usuario/formulario-usuario.component';
import { ListaUsuariosComponent } from './paginas/usuarios/lista-usuarios/lista-usuarios.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataBindingComponent } from './paginas/data-binding/data-binding.component';
import { BotaoComponent } from './componentes/botao/botao.component';
import { CicloDeVidaComponent } from './componentes/ciclo-de-vida/ciclo-de-vida.component';
import { ListaDeTarefasComponent } from './paginas/tarefas/lista-de-tarefas/lista-de-tarefas.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListaUsuariosComponent,
    FormularioUsuarioComponent,
    DataBindingComponent,
    BotaoComponent,
    CicloDeVidaComponent,
    ListaDeTarefasComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,   
    MatCardModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
