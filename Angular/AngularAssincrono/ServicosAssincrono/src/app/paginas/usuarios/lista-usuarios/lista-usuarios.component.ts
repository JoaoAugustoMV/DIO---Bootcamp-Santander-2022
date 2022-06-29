import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/modelos/usuario';
import { UsuarioService } from 'src/app/servicos/usuario.service';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {
  usuarios: Array<Usuario> = []
  constructor(private usuarioService: UsuarioService,) { } // Injeção de dependencia do Servico UsuarioService

  ngOnInit(): void {
    this.getUsuarioComponente()
  }

  getUsuarioComponente(){
    this.usuarioService.getUsuarios().subscribe(resposta => {
      this.usuarios = resposta
      console.log(this.usuarios)
    })
  }

  excluir(id: number){
    // Observable.subscribe(callback de sucesso, callback de erro!), callback executada quando o subscribe deu certo
    this.usuarioService.excluir(id).subscribe(resposta => {
      console.log(`O Usuario de id ${id} foi deletado`)
    }, (erro) => {
      console.log(erro)
    }, () => {
      this.getUsuarioComponente()
    }) // end subscribe
  } // end excluir(id)
} // end ListaUsuarioComponent
