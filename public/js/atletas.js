//Auth
var logado = false;
if (localStorage.getItem("acesso") == "true") {
  logado = true;
}

if (logado != true) {
  window.location.href = "login";
}

let listaDeAtletas = [];
let tabela = document.getElementById("tabela");
function atualiza() {
  fetch("/rotaAtletas")
    .then((res) => res.json())
    .then((dados) => {
      console.log(dados);
      listaDeAtletas = dados;
      tabela.innerHTML = listaDeAtletas
        .map(
          (atleta, i) => `
      <tr>
          <th scope="row">${atleta.id}</th>
          <td>${atleta.nome}</td> 
          <td class="cpf">${atleta.cpf}</td>
          <td>${atleta.posicao}</td>
          <td>
            <i class="fas icon fa-times delete fa-lg" onclick="deletar(${atleta.id})"></i>
          </td>
      </tr>`
        )
        .join("");
    });
}
atualiza();

function deletar(id) {
  fetch("/rotaAtletas/" + id, {
    method: "DELETE",
  });
}
