export class Customer {

  constructor(
    public nome: string,
    public email: string,
    public cep: string,
    public endereco: string,
    public cidade: string,
    public estado: string,
    public usuario: string,
    public senha: string,
    public confirmarSenha: string
  ) {
  }
}