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
  }

  adicionaTarefa(titulo: string){
    const id = this.listaTarefas.length + 1
    
    // Add uma nova classe instaciada
    this.listaTarefas.push(new Tarefa(id, titulo, false))
    console.log(this.listaTarefas)
  } // end adicionaTarefa(titulo)
} // end ListaDeTarefasComponent
