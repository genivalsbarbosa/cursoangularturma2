import { Component, OnInit } from '@angular/core';
import { Pessoa } from './servico/pessoa';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css']
})
export class PessoaComponent implements OnInit {  

  titulo: string = 'Cadastro titulo';

  pessoa: Pessoa = new Pessoa();

  listaPessoas: Pessoa[] = [
    {codigo: '1' ,nome: 'Genival', telefone: '9999' , 
      dataNascimento: '99/99/99', endereco: 'avenida', bairro: 'bairro', 
      cidade: 'cidade', estado: 'estado'},
    {codigo: '2' ,nome: 'Jose', telefone: '9999' , 
      dataNascimento: '99/99/99', endereco: 'avenida', bairro: 'bairro', 
      cidade: 'cidade', estado: 'estado'}

  ];

  listaEstado: any[] = [
    {codigo:'PE', nome: 'Pernambuco'},
    {codigo:'AL', nome: 'Alagoas'},
    {codigo:'MA', nome: 'Maranhão'}
  ];

  mostrarCadastroPessoa: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  incluir(){
    this.listaPessoas.push(this.pessoa);
  }

  imprimir(){ 

    alert(`${this.pessoa.codigo}
    ${this.pessoa.nome}
    ${this.pessoa.telefone}
    ${this.pessoa.dataNascimento}
    ${this.pessoa.endereco}
    ${this.pessoa.bairro}
    ${this.pessoa.cidade}
    ${this.pessoa.estado}
    `);
  }

  
  cadastroPessoa(){
    this.mostrarCadastroPessoa = !this.mostrarCadastroPessoa;
  }

}
