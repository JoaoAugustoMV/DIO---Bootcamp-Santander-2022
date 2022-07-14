import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../modelos/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  apiUrl = 'https://sheet.best/api/sheets/011ba8a0-d5e9-413a-9708-8c239dabac43'
  httpOpcoes ={
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      // 'token': '234534908'
    })
  }
  constructor(private httpClient: HttpClient) { }

  // Retorna lista de usuario(Metodo GET)
  getUsuarios(): Observable<Usuario[]>{
    return this.httpClient.get<Usuario[]>(this.apiUrl)
  }
  
  postUsuario(usuario: Usuario): Observable<Usuario>{
    // usuario.id = usuario.
    return this.httpClient.post<Usuario>(this.apiUrl, usuario) // Metodo POST recebe a URL e o novo elemento
    
  }

  excluir(id: number): Observable<Usuario>{
    return this.httpClient.delete<Usuario>(`${this.apiUrl}/id/${id}`)
  
  }

  editar(id: string, usuario: Usuario): Observable<Usuario>{
    return this.httpClient.put<Usuario>(`${this.apiUrl}/id/${id}`, usuario, this.httpOpcoes)
  }

  getUsuario(id: string): Observable<Usuario[]>{
    return this.httpClient.get<Usuario[]>(`${this.apiUrl}/id/${id}` )
  }
}
