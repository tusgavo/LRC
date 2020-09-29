class Atleta {
  static get tabela() {
    return "atletas";
  }
  constructor(objAtleta) {
    this.nomeAtleta = "";
    this.cpf = "";
    this.posicao = "";
    Object.assign(this, objAtleta);
  }
}
module.exports = Atleta;
