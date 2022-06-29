import { AfterContentChecked, AfterContentInit, AfterViewChecked, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-ciclo-de-vida',
  templateUrl: './ciclo-de-vida.component.html',
  styleUrls: ['./ciclo-de-vida.component.css']
})
export class CicloDeVidaComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewChecked, OnDestroy {

  @Input() numeroFilho = 10

  constructor() { 
    console.log('Constructor')
  }
 

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges')
  }
  ngOnInit(): void {
    console.log('ngOnInit()')
  }
  ngDoCheck(){
    console.log('ngDoCheck')
  }
  ngAfterContentInit(){
    console.log('ngAfterContentInit')
  }
  ngAfterContentChecked(){
    console.log('ngAfterCOntentChecked')
  }
  ngAfterViewChecked(){
    console.log('ngAfterViewChecked')
  }
  ngOnDestroy(){
    console.log('ngOnDestroy')  
  }

}


// ## Ciclo de Vida de Componentes
// - constructor
// - ngOnChanges(): chamada uma vez na criação e sempre que houver alguma alteração em **inputs**
// - ngOnInit: chamado uma vez na criação
// - ngDoCheck(): chamado a cada ciclo de detecções de alterações(usado para mudanças que o Angular não detecta)
// - ngAfertContentInit: chamado depois que um conteudo externo é inserido no component
// - - Ex: Conteudo vindo de <ng-content>
// - ngAfterContentChecked: Após verificaçõ de conteudo externo
// - ngAfterViewInit: Após o conteudo do componente e seus filhos forem inicializados
// - ngAfterViewCheck: Sempre que conteudo é o Angular detecta alterações
// - ngOnDestroy(): **Antes** do Angular destruir o componente