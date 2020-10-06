let modalCriacao = null;
let modalEdicao = null;
document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".modal");
  var instances = M.Modal.init(elems, {});
  modalEdicao = instances[0];
  modalCriacao = instances[1];
  modalDelecao = instances[2];
});
let informacoesEquipes = [];
let infoEquipes = document.getElementById("informacoesEquipe");

function mostraModal(i) {
  modalEdicao.open();
  document.getElementById("ed-id_equipe").value =
    informacoesEquipes[i].id_equipe;
  document.getElementById("ed-nomeEquipe").value =
    informacoesEquipes[i].nomeEquipe;
  document.getElementById("ed-telResp").value = informacoesEquipes[i].telResp;
  document.getElementById("ed-tecnico").value = informacoesEquipes[i].tecnico;
  document.getElementById("ed-auxTecnico").value =
    informacoesEquipes[i].auxTecnico;
}

function atualiza() {
  fetch("/rotasEquipes")
    .then((res) => res.json())
    .then((dados) => {
      console.log(dados);
      if (dados.sucesso === false) {
        window.location.href = "newTeam";
      } else {
        infoEquipes.innerHTML = dados
          .map(
            (equipe, i) => `
        <center>
        <h1 class="tituloDadosPrin">Dados principais</h1>
          <h2 class="nomeTime">
            ${equipe.nomeEquipe}
          </h2>
          <div class="dadosPrin">
            <label style="font-size: 20px; margin-top: 20px">Nome do responsável:</label>
            <input
              type="text"
              class="inputDados"
              name=""
              placeholder="Nome do responsável:"
              value="${equipe.nome}"
              disabled
            />
            <br>
            
            <label style="font-size: 20px; margin-top: 20px">Telefone do responsável:</label>
            <input
              type="text"
              class="inputDados"
              name=""
              placeholder="Telefone do resposável:"
              value="${equipe.telResp}"
              disabled
            />
          </div>
          <hr />
          <div class="dadosTecnicos">
            <div class="container">
              <h1 class="tituloDadosTecn">Dados técnicos</h1>

              <label style="font-size: 20px">Técnico:</label>
              <input
                type="text"
                class="inputDados"
                name=""
                placeholder="Técnico:"
                value="${equipe.tecnico}"
                disabled
              />

              <br>
              <label style="font-size: 20px; margin-top: 20px">Auxíliar Técnico:</label>
              <input
                type="text"
                class="inputDados"
                name=""
                placeholder="Auxíliar técnico"
                value="${equipe.auxTecnico}"
                disabled
              />
            </div>
          </div>
        </center>
      `
          )
          .join("");
      }
    });
}
atualiza();
