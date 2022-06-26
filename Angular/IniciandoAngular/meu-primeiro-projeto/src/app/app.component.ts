import { Component, OnInit } from '@angular/core';
import { PessoasService } from './shared/servicos/pessoas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  constructor(){
  }

  ngOnInit(){
    
  }

  clicou(){
    console.log('Clicou')
  }

  
}
