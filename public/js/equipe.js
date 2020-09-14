// input Nome do responsável
document.getElementById("nomeResp").disabled = true;

document.getElementById("iconNomeResp").addEventListener("click", function() {
  document.getElementById("nomeResp").disabled = false;
  document.getElementById("nomeResp").focus();
});

//input Telefone do responsável
document.getElementById("telResp").disabled = true;

document.getElementById("iconTelResp").addEventListener("click", function() {
  document.getElementById("telResp").disabled = false;
  document.getElementById("telResp").focus();
});

//input email
document.getElementById("email").disabled = true;

document.getElementById("iconEmail").addEventListener("click", function() {
  document.getElementById("email").disabled = false;
  document.getElementById("email").focus();
});

//input técnico
document.getElementById("tecnico").disabled = true;

document.getElementById("iconTecn").addEventListener("click", function() {
  document.getElementById("tecnico").disabled = false;
  document.getElementById("tecnico").focus();
});

// input auxiliar tecnico
document.getElementById("auxTecn").disabled = true;

document.getElementById("iconAuxTecn").addEventListener("click", function() {
  document.getElementById("auxTecn").disabled = false;
  document.getElementById("auxTecn").focus();
});
