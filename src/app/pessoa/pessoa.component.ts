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

  listaPessoas: Pessoa[] = [];  

  mostrarBotaoSalvarAlteracao: boolean = false;

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
    this.pessoa = new Pessoa();    
  }

  alterar(pessoa){
    this.pessoa = pessoa;
    this.mostrarBotaoSalvarAlteracao = true;
  }

  salvarAlteracao(){
    this.pessoa = new Pessoa();
    this.mostrarBotaoSalvarAlteracao = false;
  }

  excluir(pessoa){
    this.listaPessoas = this.listaPessoas.filter(
      obj => obj !== pessoa
    );

    /* pseudocodigo do filter de cima
    let temp;
    for(p of listaPessoa)  {
      if(p !== pessoa){
        temp.push(p);
      }
    }
    this.listaPessoas = temp;
    */

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
