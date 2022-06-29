import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/modelos/usuario';
import { UsuarioService } from 'src/app/servicos/usuario.service';


@Component({
  selector: 'app-formulario-usuario',
  templateUrl: './formulario-usuario.component.html',
  styleUrls: ['./formulario-usuario.component.css']
})
export class FormularioUsuarioComponent implements OnInit {

  formularioUsuario: FormGroup // Interface do Angular para formularios
  // Deve ser passado pelo [formGroup] no elemento <form>
  usuarios: Array<Usuario> =[]
  idUsuario: any = ''

  constructor(private fb: FormBuilder, private usuarioService: UsuarioService,
    private rotaAtiva: ActivatedRoute, private router: Router) { // FormBuilder: Classe do Angular para criar instancias de formularios
    this.formularioUsuario = this.fb.group({ // Estado inicial da instancia
      id: 0, // nomes devem ser passados pelo atributo formControlName dos elementos <input>
      nome: '',
      sobrenome: '',
      idade: 0,
      profissao: ''
    })

   } 

  ngOnInit(): void {
    this.rotaAtiva.paramMap.subscribe( params => {
      this.idUsuario = params.get('id')
      console.log(this.idUsuario)
      if(this.idUsuario !== null){
        this.usuarioService.getUsuario(this.idUsuario).subscribe(resposta => {
          this.formularioUsuario.patchValue({
            id: resposta[0].id,
            nome: resposta[0].nome,
            sobrenome: resposta[0].sobrenome,
            idade: resposta[0].idade,
            profissao: resposta[0].profissao
          })
        }) // end this.usuarioService.getUsuario(this.idUsuario).subscribe
      } // if(this.idUsuario !== null)
    }) // end rotaAtiva.paramMap.subscribe
  } // end ngOnInit
              
  getUsuarios(){
    this.usuarioService.getUsuarios().subscribe(resposta =>{
      this.usuarios = resposta
    })
  }

  acaoBotao(){
    if(this.idUsuario !== null){
      this.atualizarUsuario()
    } else{
      this.cadastrar()
    }
  }

  atualizarUsuario(){
this.usuarioService.editar(this.idUsuario, this.formularioUsuario.value).subscribe(resposta => {
  console.log(resposta)
}, erro => {
  console.log(erro)
}, () => {
  this.router.navigate(['/'])
}
) // end subscribe

  } // end atualizarUsuario
  cadastrar(){
  //formGroup.get(controlName): retorna o value de um formControlName(retorna uma classe chamada AbstractCOntrol)
  //.patchValue: Substitui o valor anterior pelo passado no parametro
    this.formularioUsuario.get('id')?.patchValue(this.usuarios.length + 1) //
    this.usuarioService.postUsuario(this.formularioUsuario.value).subscribe(resposta =>{
      console.log(`Usuario ${resposta.nome} ${resposta.sobrenome} foi cadastrado`)
      this.router.navigate(['/'])
    })
    
  } // end cadastrar

 
}
