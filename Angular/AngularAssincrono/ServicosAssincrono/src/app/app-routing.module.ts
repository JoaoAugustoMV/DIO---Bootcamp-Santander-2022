import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataBindingComponent } from './paginas/data-binding/data-binding.component';
import { ListaDeTarefasComponent } from './paginas/tarefas/lista-de-tarefas/lista-de-tarefas.component';
import { FormularioUsuarioComponent } from './paginas/usuarios/formulario-usuario/formulario-usuario.component';
import { ListaUsuariosComponent } from './paginas/usuarios/lista-usuarios/lista-usuarios.component';

const routes: Routes = [
  { path:'', component: ListaUsuariosComponent},
  { path:'formulario', component:FormularioUsuarioComponent},
  {path: 'form/:id', component:FormularioUsuarioComponent}, // Vai para a ULR /form/id do usuario. ": var" passa para a URL
  { path:'data-binding', component: DataBindingComponent},
  { path:'listaDeTarefas', component: ListaDeTarefasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
