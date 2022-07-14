import { UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-exemplos',
  templateUrl: './pipes-exemplos.component.html',
  styleUrls: ['./pipes-exemplos.component.css']
})
export class PipesExemplosComponent implements OnInit {
  numero = 0
  texto = 'Ola, mundo'
  data = new Date

  pessoa = {
    nome: 'Joao',
    idade: 19,
    profissao: 'Func Publico'
  }

  lista = ['joao', 'carol', 'silvia', 'gilmar']
  constructor(private upperCasePipe: UpperCasePipe) { } // Injeção de Dependencia
  // Lembrar de prover em module.ts


  ngOnInit(): void {
   
  }

}
