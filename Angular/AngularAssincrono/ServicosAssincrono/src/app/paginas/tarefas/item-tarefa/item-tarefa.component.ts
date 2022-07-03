import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { concatMapTo } from 'rxjs';
import { Tarefa } from 'src/app/modelos/tarefa';

@Component({
  selector: 'app-item-tarefa',
  templateUrl: './item-tarefa.component.html',
  styleUrls: ['./item-tarefa.component.css']
})
export class ItemTarefaComponent implements OnInit {
  // Recebe info do Componente pai(no caso listaDeTarefaComponent), atraves do
  // atributo [tarefa], passado no app-item-tarefa 
  @Input() tarefa!: Tarefa; 

  // Manda info para o componente pai
  @Output() removerTarefaEmitter = new EventEmitter
  concluida = false
  constructor() { }

  ngOnInit(): void {
  }

  marcarConcluida(): boolean{
    
    this.concluida = !this.concluida
    return this.concluida
  }
  removerTarefa(): void{
    
    this.removerTarefaEmitter.emit(this.tarefa)
    // EventEmitter.emit:envia info
  }
} 
