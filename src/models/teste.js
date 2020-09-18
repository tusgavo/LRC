class Teste {
  static get tabela() {
    return "teste";
  }
  constructor(objTeste) {
    this.nome = "";
    this.senha = "";
    this.email = "";
    Object.assign(this, objTeste);
  }
}
module.exports = Teste;
