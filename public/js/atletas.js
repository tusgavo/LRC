//Auth
var logado = false;
if (localStorage.getItem("acesso") == "true") {
  logado = true;
}

if (logado != true) {
  window.location.href = "login";
}

let modalCriacao = null;
let modalEdicao = null;
document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".modal");
  var instances = M.Modal.init(elems, {});
  modalEdicao = instances[0];
  modalCriacao = instances[1];
  modalDelecao = instances[2];
});

function abreModal() {
  $(".modal").modal();
}

function mostraModalDelecao(i) {
  $(".modal").modal();
  // document.getElementById("dl-id").value = listaDeAtletas[i].id_atleta;
}

let listaDeAtletas = [];
let tabela = document.getElementById("tabela");
function atualiza() {
  fetch("/rotasTeste")
    .then((res) => res.json())
    .then((dados) => {
      listaDeAtletas = dados;
      tabela.innerHTML = listaDeAtletas
        .map(
          (atleta, i) => `
      <tr>
          <th scope="row" class="numCamisa">${atleta.id_atleta}</th>
          <td>${atleta.nomeAtleta}</td> 
          <td class="cpf">${atleta.cpf}</td>
          <td>${atleta.posicao}</td>
          <td>
            <i class="fas icon fa-times delete fa-lg" onclick="mostraModalDelecao(${atleta.id})"></i>
          </td>
      </tr>`
        )
        .join("");
    });
}
atualiza();

function addAtleta() {
  const formulario = document.getElementById("formLogin");
  const data = new URLSearchParams(new FormData(formulario));
  fetch("/rotasTeste", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: data,
  });
}

function deletarAtleta() {
  const id = document.getElementById("dl-id").value;
  fetch("/rotasTeste/" + id, {
    method: "DELETE",
  });
}
