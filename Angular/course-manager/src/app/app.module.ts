import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms' // Importando o modulo de Formulário(não vem por padrão)
import { RouterModule } from '@angular/router'; // Modulo de rotas
import { HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { CourseListComponent } from './courses/course-list.component';
import { StarComponent } from './star/star.component';
import { ReplacePipe } from './pipes/replace.pipe';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { Error404Component } from './error404/error404.component';
import { CourseInfoComponent } from './courses/course-info.component';

@NgModule({
  declarations: [ // Modulos para o Angular Ler
    AppComponent,
    CourseListComponent,
    StarComponent,
    NavBarComponent,
    Error404Component,
    CourseInfoComponent,
    ReplacePipe
    
  ],
  imports: [
    BrowserModule,
    FormsModule, // Importando o modulo de Formulário(não vem por padrão)
    HttpClientModule,
    RouterModule.forRoot([ // Parametro esperado: Array de objetos de Rota
      {
        path: '', redirectTo: 'courses', pathMatch: 'full'
      //path: '' = url raiz (no caso http://localhost:4200/)
      //redictTo: 'course' = Redireciona a rota de cursos
      // pathMatch: 'full' = Por estar direcionando para um rota e não um componenente
      }, 
      {
        path: 'courses', component: CourseListComponent
        // path: 'courses' = http://localhost:4200//course
        // component: CourseListComponent = Linka o path com o Componente
      },
      {
        path: 'courses/info/:id', component: CourseInfoComponent
      },
      {
        path: '**', component: Error404Component
        // path: '**' = quando não for encontrada a rota(URL)
      },
    ]) // end RouterModule.forRoot()

  ], // end imports

  providers: [],
  bootstrap: [AppComponent]
}) // end NgModule

export class AppModule { }
