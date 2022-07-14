import { Component, OnInit } from '@angular/core';
import { Tarefa } from 'src/app/modelos/tarefa';

@Component({
  selector: 'app-lista-de-tarefas',
  templateUrl: './lista-de-tarefas.component.html',
  styleUrls: ['./lista-de-tarefas.component.css']
})
export class ListaDeTarefasComponent implements OnInit {
  listaTarefas: Array<Tarefa> = []

  constructor() { }

  ngOnInit(): void { 
    let tarefas: any = localStorage.getItem('Tarefas')
    let listaTarefas =JSON.parse(tarefas)
    if(!listaTarefas){ // Se localStorage estiver vazio
      this.listaTarefas = []
    } else{
      this.listaTarefas = listaTarefas
    }// end else

  } // end ngOnInit

  adicionaTarefa(titulo: string){
    const id = this.listaTarefas.length + 1
    
    // Add uma nova classe instaciada
    this.listaTarefas.push(new Tarefa(id, titulo, false))
    
    localStorage.setItem('Tarefas', JSON.stringify(this.listaTarefas))
  } // end adicionaTarefa(titulo)
  removerTarefa(tarefa: any){
    let indice = this.listaTarefas.indexOf(tarefa)
    this.listaTarefas.splice(indice, 1)
    
    localStorage.setItem('Tarefas', JSON.stringify(this.listaTarefas))
  }
} // end ListaDeTarefasComponent
