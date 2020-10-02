function criarEquipe() {
  const formulario = document.getElementById("form-criacao");
  const data = new URLSearchParams(new FormData(formulario));
  fetch("/rotasEquipes", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: data
  }).then( data => {
    console.log(data);
    window.location.href = "equipe";
    Swal.fire("Sucesso!", "Sua equipe foi criada!", "success");
  });
}

function getCookie(k) {
  var c = String(document.cookie).split(";");
  var neq = k + "=";

  for (var i = 0; i < c.length; i++) {
    var d = c[i];

    while (d.charAt(0) === " ") {
      c[i] = c[i].substring(1, d.length);
    }

    if (c[i].indexOf(neq) === 0) {
      return decodeURIComponent(c[i].substring(neq.length, c[i].length));
    }
  }

  return null;
}

var idUsuario = getCookie("id_usuario");

document.getElementById("cr-id_usuario").value = idUsuario;