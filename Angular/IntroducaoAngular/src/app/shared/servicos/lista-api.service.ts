import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


export type RespostaApi = [
  info: {},
  results: {},
]

@Injectable({
  providedIn: 'root'
})
export class ListaApiService {
  apiUrl = 'https://rickandmortyapi.com/api/character' // endPoint da API

  teste = this.trazerLista()
  constructor(private httpClient: HttpClient) { // Injeçao de Dependecia HTTP

  }

  trazerLista(): Observable<any>{
    return this.httpClient.get<any>(this.apiUrl)
  }
}
