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
  fetch("/atletas")
    .then((res) => res.json())
    .then((dados) => {
      listaDeAtletas = dados;
      tabela.innerHTML = listaDeAtletas
        .map((atleta, i) => `
      <tr>
          <th scope="row">${atleta.id}</th>
          <td>${atleta.nome}</td> 
          <td class="cpf">${atleta.cpf}</td>
          <td>${atleta.posicao}</td>
          <td class="editDelete">
            <i class="fa fa-pencil" style="color: green; margin: 0 10px 0; cursor: pointer;" aria-hidden="true"></i>
            <i class="fas icon fa-times delete fa-lg" onclick="deletar(${i})"></i>
          </td>
      </tr>`
        ).join("");
    });
}
atualiza();
