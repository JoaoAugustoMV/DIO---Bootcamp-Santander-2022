// Criando Diretiva Personalida

import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appMarcaTexto]' // Apesar de aqui estar com os '[]', no html, escrever somente o nome(appMarcaTexto)
})
export class MarcaTextoDirective implements OnInit{

  @Input() corDeFundo = 'yellow' // Recebe atributo do elemento
  @Input() corDoTexto = 'white'  // Recebe atributo do elemento


  // Toda diretiva altera um elemento, então se deve esperar algum elemento por padrão
  constructor(private elemento: ElementRef) {

   }

   ngOnInit(): void {
     this.mudarFundo()
   }

   private mudarFundo(cor = this.corDeFundo):void{
    this.elemento.nativeElement.style.backgroundColor = this.corDeFundo
    this.elemento.nativeElement.style.color = this.corDoTexto
    this.elemento.nativeElement.style.fontWeight = 'bold'
   }

}
