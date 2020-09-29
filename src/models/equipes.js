class Equipe {
    static get tabela() {
      return "equipes";
    }
   
    constructor(objEquipe) {
      this.nomeEquipe = "";
      this.nome = "";
      this.telResp = "";
      this.tecnico = "";
      this.auxTecnico = "";
      Object.assign(this, objEquipe);
    }
  }
  module.exports = Equipe;
  