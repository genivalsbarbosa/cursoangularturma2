
export class Pessoa  {    
    codigo: string = ''
    nome: string = '';
    telefone: string = '';
    dataNascimento: string = '';
    endereco: string = '';
    bairro: string = '';
    cidade: string = '';
    estado: string = '';
    
    constructor(
        codigo?: string,    
        nome?: string,
        telefone?: string,
        dataNascimento?: string,
        endereco?: string,
        bairro?: string,
        cidade?: string,
        estado?: string   
    ) {
        this.codigo = codigo;
        this.nome = nome;
        this.telefone = telefone;
        this.dataNascimento = dataNascimento;
        this.endereco = endereco;
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado;
    }
    
    
}