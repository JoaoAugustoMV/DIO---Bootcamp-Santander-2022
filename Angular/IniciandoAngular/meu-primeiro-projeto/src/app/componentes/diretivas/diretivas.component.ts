import { Component, OnInit } from '@angular/core';
import { PessoasService } from '../../shared/servicos/pessoas.service';
                                
@Component({
  selector: 'app-diretivas',
  templateUrl: './diretivas.component.html',
  styleUrls: ['./diretivas.component.css']
})
export class DiretivasComponent implements OnInit {
  contador = 0
  pessoas: any
  texto = ''
  constructor(private pessoasService: PessoasService) { }

  ngOnInit(): void {
    this.trazerPessoasComponente()
    let intervalo = setInterval(() => {
      this.contador++
      if(this.contador >= 10){
        clearInterval(intervalo) // 
      }
    }, 1000)
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


