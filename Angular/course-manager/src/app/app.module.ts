import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms' // Importando o modulo de Formulário(não vem por padrão)
import { RouterModule } from '@angular/router'; // Modulo de rotas
import { HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';



import { CourseModule } from './courses/course.module';
import { CoreModule } from './core/component/core.module';


@NgModule({
  declarations: [ // Modulos para o Angular Ler
    AppComponent,
    
  ],
  imports: [
    CourseModule,
    BrowserModule,
    CoreModule,
    FormsModule, // Importando o modulo de Formulário(não vem por padrão)
    HttpClientModule,
    RouterModule.forRoot([ // Parametro esperado: Array de objetos de Rota
      {
        path: '', redirectTo: 'courses', pathMatch: 'full'
      //path: '' = url raiz (no caso http://localhost:4200/)
      //redictTo: 'course' = Redireciona a rota de cursos
      // pathMatch: 'full' = Por estar direcionando para um rota e não um componenente
      }, 
      
      
    ]) // end RouterModule.forRoot()

  ], // end imports

  providers: [],
  bootstrap: [AppComponent]
}) // end NgModule

export class AppModule { }
