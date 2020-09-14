//input Nome da equipe
// document.getElementById("nomeEquipe").disabled = true;

// document.getElementById("iconNomeEquipe").addEventListener("click", function () {
//   document.getElementById("nomeEquipe").disabled = false;
//   document.getElementById("nomeEquipe").focus();
// });

function deletar() {
  Swal.fire({
    title: "Você tem certeza?",
    text: "Você não poderá reverter isso!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Sim, excluir!"
  }).then(result => {
    if (result.value) {
      Swal.fire("Excluido!", "Seu arquivo foi deletado.", "success");
    }
  });
}

function logout() {
  // Swal.fire({
  //   title: "Confirmar saída?",
  //   icon: "warning",
  //   showCancelButton: true,
  //   confirmButtonColor: "#3085d6",
  //   cancelButtonColor: "#d33",
  //   confirmButtonText: "Sim",
  // });
  window.location.href = "login";
}

// Auth
var logado = false;
if (localStorage.getItem("acesso") == "true") {
  logado = true;
}

if (logado != true) {
  window.location.href = "login";
}
localStorage.clear();
