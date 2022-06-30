import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-botao',
  templateUrl: './botao.component.html',
  styleUrls: ['./botao.component.css']
})
export class BotaoComponent implements OnInit {
  // 
  @Input() btnTexto = 'Clique' // Default(caso não passe nada em [btnTexto])
  @Input() btnTipo = '' // Default

  @Output() clickEmitter = new EventEmitter
  textoFilho = 'Clicou no filho'
  constructor() { }

  ngOnInit(): void {
  }

  clicou(){
   this.clickEmitter.emit(this.textoFilho) 
  }

}
