import { Component, OnInit } from '@angular/core';
import { ListaApiService } from 'src/app/shared/servicos/lista-api.service';

@Component({
  selector: 'app-lista-api',
  templateUrl: './lista-api.component.html',
  styleUrls: ['./lista-api.component.css']
})
export class ListaAPIComponent implements OnInit {
  personagens: any // Pratica ruim
  constructor(private listaApiService: ListaApiService) { }

  ngOnInit(): void {
    this.trazerListaComponente()
    console.log(this.personagens)
  }

  trazerListaComponente(){
    this.listaApiService.trazerLista().subscribe(resultado => {
      this.personagens = resultado.results
      console.log(this.personagens)
    })
  }

}
