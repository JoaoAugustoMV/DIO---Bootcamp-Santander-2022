import { Component, OnInit } from '@angular/core';
import { PessoasService } from '../../servicos/pessoas.service';

@Component({
  selector: 'app-lista-pessoas',
  templateUrl: './lista-pessoas.component.html',
  styleUrls: ['./lista-pessoas.component.css']
})
export class ListaPessoasComponent implements OnInit {
  pessoas: any // Nao consegui fazer Interface
  constructor(private pessoasService: PessoasService) { }

  ngOnInit(): void {
    this.trazerPessoasComponente()
  } 

  trazerPessoasComponente(){
    // trazerPessoas retorna um Observable
    // Observable.subscribe: Manda os valores espera uma callback, define como obter valores do Observable
    // O parametro da callback é o retorno de trazerPessoas()
    this.pessoasService.trazerPessoas().subscribe(povo => {
      this.pessoas = povo
    })
  }
}
