class Teste {
  static get tabela() {
    return "atletas";
  }
  constructor(objTeste) {
    this.nomeAtleta = "";
    this.cpf = "";
    this.posicao = "";
    Object.assign(this, objTeste);
  }
}
module.exports = Teste;
