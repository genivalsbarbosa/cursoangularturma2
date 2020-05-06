import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css']
})
export class PessoaComponent implements OnInit {

  titulo: string = 'Cadastro titulo';

  nome: string = 'Genival';

  constructor() { }

  ngOnInit(): void {
  }

  imprimir(){    
    alert(this.nome);
  }

}
