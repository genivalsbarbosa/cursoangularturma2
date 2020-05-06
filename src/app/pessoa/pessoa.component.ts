import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css']
})
export class PessoaComponent implements OnInit {

  titulo: string = 'Cadastro titulo';

  codigo: string = ''
  nome: string = 'Genival';
  telefone: string = '';
  dataNascimento: string = '';
  endereco: string = '';
  bairro: string = '';
  cidade: string = '';
  estado: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  imprimir(){    
    alert(`${this.codigo}
    ${this.nome}
    ${this.telefone}
    ${this.dataNascimento}
    ${this.endereco}
    ${this.bairro}
    ${this.cidade}
    ${this.estado}
    `);
  }

}
