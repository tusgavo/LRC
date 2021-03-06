let modalCriacao = null;
let modalEdicao = null;
document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".modal");
  var instances = M.Modal.init(elems, {});
  modalEdicao = instances[0];
  modalCriacao = instances[1];
  modalDelecao = instances[2];
});
let listaDeAtletas = [];
let tabela = document.getElementById("tabela");

function mostraModal(i) {
  modalEdicao.open();
  document.getElementById("ed-id_atleta").value = listaDeAtletas[i].id_atleta;
  document.getElementById("ed-nomeAtleta").value = listaDeAtletas[i].nomeAtleta;
  document.getElementById("ed-cpf").value = listaDeAtletas[i].cpf;
  document.getElementById("ed-posicao").value = listaDeAtletas[i].posicao;
}

function mostraModalDelecao(i) {
  modalDelecao.open();
  document.getElementById("dl-id_atleta").value = listaDeAtletas[i].id_atleta;
}
function atualiza() {
  fetch("/rotasAtletas")
    .then((res) => res.json())
    .then((dados) => {
      listaDeAtletas = dados;
      tabela.innerHTML = listaDeAtletas
        .map(
          (atleta, i) => `
            <tr>
                <td class="idAtleta">${atleta.id_atleta}</td>
                <td>${atleta.nomeAtleta}</td>
                <td class="cpf">${atleta.cpf}</td>
                <td>${atleta.posicao}</td>
                <td><i class="fas edit fa-edit" onclick="mostraModal(${i})"></i></td>
                <td><i class="fas icon fa-times delete fa-lg" onclick="mostraModalDelecao(${i})"></i></td>
            </tr>
        `
        )
        .join("");
    });
}
atualiza();

function criarAtleta() {
  const formulario = document.getElementById("form-criacao");
  const data = new URLSearchParams(new FormData(formulario));
  fetch("/rotasAtletas", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: data,
  });
  Swal.fire("Sucesso!", "Seu atleta foi adicionado!", "success");
  setTimeout(function () {
    window.location.reload();
  }, 1500);
}

function editarAtleta() {
  const formulario = document.getElementById("form-edicao");
  const data = new URLSearchParams(new FormData(formulario));
  fetch("/rotasAtletas", {
    method: "PUT",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: data,
  });
  Swal.fire("Sucesso!", "Seu atleta foi editado!", "success");
  setTimeout(function () {
    window.location.reload();
  }, 1200);
}

function deletarAtleta() {
  const id = document.getElementById("dl-id_atleta").value;
  fetch("/rotasAtletas/" + id, {
    method: "DELETE",
  });
  Swal.fire("Sucesso!", "Seu atleta foi excluído!", "success");
  setTimeout(function () {
    window.location.reload();
  }, 1600);
}

function getCookie(k) {
  var cookieSplited = String(document.cookie).split(";");
  var key = k + "=";

  for (var i = 0; i < cookieSplited.length; i++) {
    var cookie = cookieSplited[i];

    while (cookie.charAt(0) === " ") {
      cookie = cookie.substring(1, cookie.length);
    }

    if (cookie.indexOf(key) === 0) {
      return decodeURIComponent(cookie.substring(key.length, cookie.length));
    }
  }

  return null;
}

var idEquipe = getCookie("id_equipe");

document.getElementById("cr-id_equipe").value = idEquipe;