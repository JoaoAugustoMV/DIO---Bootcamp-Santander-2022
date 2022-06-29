import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  texto = 'Joao'

  urlImg = "https://picsum.photos/300/200"
  descImg = ' Descricao da Imagem'

  btnText = 'Click aqui'

  textoVermelho = false

  textoInput = ''

  numeroPai = 10
  constructor() { }

  ngOnInit(): void {
  }

  clicou(){
    this.textoVermelho = !this.textoVermelho
    console.log(' ELeMesmo', this.texto, ' Clicou')
  }

  twoWayDataBinding(){
    console.log('this.textoInupt é: ', this.textoInput)
  }

  clicouNoFilho(texto: any){
    console.log(texto)
  }

  incrementa(numeroPai: number){
    this.numeroPai++
  }
  
}
