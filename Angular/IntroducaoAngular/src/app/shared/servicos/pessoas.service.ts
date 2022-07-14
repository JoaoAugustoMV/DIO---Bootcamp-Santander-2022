// Lembrar de colocar no providers em app.module.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'; // Reativas

// Observable: Por definição é uma coleção que funciona de forma unidirecional, ou seja, ele emite notificações sempre que ocorre uma mudança em um de seus itens e a partir disto podemos executar uma ação.
// Emite apenas quando acontece um subscribe

@Injectable({
  providedIn: 'root' // Por estar no root, é possivel injetar este serviços em todos componentes
})
export class PessoasService {

  constructor() { }

  trazerPessoas(): Observable<any>{
    let pessoas = [
      {
        nome: 'Joao',
        sobrenome: 'Augusto',
        idade: 19
      },
      {
        nome: 'Carol',
        sobrenome: 'Souza',
        idade: 26
      },
      {
        nome: 'Silvia',
        sobrenome: 'Rosa',
        idade: 46
      }
    ]

    return of(pessoas) // of retorna um valor unico(no caso array)
  }
}
