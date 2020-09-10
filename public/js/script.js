//input Nome da equipe
// document.getElementById("nomeEquipe").disabled = true;

// document.getElementById("iconNomeEquipe").addEventListener("click", function () {
//   document.getElementById("nomeEquipe").disabled = false;
//   document.getElementById("nomeEquipe").focus();
// });

// input Nome do responsável
document.getElementById("nomeResp").disabled = true;

document.getElementById("iconNomeResp").addEventListener("click", function () {
  document.getElementById("nomeResp").disabled = false;
  document.getElementById("nomeResp").focus();
});

//input Telefone do responsável
document.getElementById("telResp").disabled = true;

document.getElementById("iconTelResp").addEventListener("click", function () {
  document.getElementById("telResp").disabled = false;
  document.getElementById("telResp").focus();
});

//input email
document.getElementById("email").disabled = true;

document.getElementById("iconEmail").addEventListener("click", function () {
  document.getElementById("email").disabled = false;
  document.getElementById("email").focus();
});

//input técnico
document.getElementById("tecnico").disabled = true;

document.getElementById("iconTecn").addEventListener("click", function () {
  document.getElementById("tecnico").disabled = false;
  document.getElementById("tecnico").focus();
});

// input auxiliar tecnico
document.getElementById("auxTecn").disabled = true;

document.getElementById("iconAuxTecn").addEventListener("click", function () {
  document.getElementById("auxTecn").disabled = false;
  document.getElementById("auxTecn").focus();
});

function deletar() {
  Swal.fire({
    title: "Você tem certeza?",
    text: "Você não poderá reverter isso!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Sim, excluir!",
  }).then((result) => {
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

window.onbeforeunload = function () {
  localStorage.setItem("acesso", true);
};
