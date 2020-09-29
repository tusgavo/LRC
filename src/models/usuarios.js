class Usuario {
  static get tabela() {
    return "usuarios";
  }
  static get chavePrimaria() {
    return "id_usuario";
  }
  constructor(objUsuario) {
    this.nome = "";
    this.senha = "";
    this.email = "";
    Object.assign(this, objUsuario);
  }
}
module.exports = Usuario;
