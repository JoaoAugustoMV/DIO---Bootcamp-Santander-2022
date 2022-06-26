import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { MarcaTextoDirective } from './shared/diretivas/marca-texto.directive';
import { PessoasService } from './shared/servicos/pessoas.service';
import { ListaPessoasComponent } from './shared/componentes/lista-pessoas/lista-pessoas.component';
import { ListaAPIComponent } from './componentes/lista-api/lista-api.component';
import { Error404Component } from './componentes/error404/error404.component';
import { DiretivasComponent } from './componentes/diretivas/diretivas.component';
import { CommonModule } from '@angular/common';




@NgModule({
  declarations: [
    AppComponent,
    MarcaTextoDirective,
    ListaPessoasComponent,
    Error404Component,
    ListaAPIComponent,
    DiretivasComponent,


  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: '', redirectTo:'diretivas', pathMatch:'full'
      },
      {
        path: 'diretivas', component: DiretivasComponent
      },
      {
        path: 'listaAPI', component: ListaAPIComponent
      },
      { 
        path: '**', component: Error404Component
      } 
    ])
  ],
  providers: [PessoasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
