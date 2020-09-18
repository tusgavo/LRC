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
  fetch("/rotasAtletas")
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
            <i class="fas icon fa-times delete fa-lg" onclick="deletarAtleta(${atleta.id})"></i>
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
  fetch("/rotasAtletas", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: data,
  });
}

// function deletar(id) {
//   fetch("/atletasBack/" + id, {
//     method: "DELETE",
//   });
// }

// function deletarAtleta(id_atleta) {
//   Swal.fire({
//     title: "Atenção!",
//     text: "Essa Ação não poderá ser Desfeita!",
//     icon: "warning",
//     showCancelButton: true,
//     confirmButtonColor: "rgb(68, 103, 255)",
//     cancelButtonColor: "#d33",
//     confirmButtonText: "Excluir",
//   }).then((result) => {
//     if (result.value) {
//       fetch("/atletasBack/" + id_atleta, {
//         method: "DELETE",
//       }).then(
//         Swal.fire({
//           title: "Sucesso!",
//           text: "O atleta foi deletado!",
//           icon: "success",
//           showConfirmButton: false,
//         }),
//         setTimeout(function () {
//           window.location.reload();
//         }, 1000)
//       );
//     }
//   });
// }
