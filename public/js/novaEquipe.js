function criarEquipe() {
  const formulario = document.getElementById("form-criacao");
  const data = new URLSearchParams(new FormData(formulario));
  fetch("/rotasEquipes", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: data
  }).then(data => {
    window.location.href = "equipe";
  });
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

var idUsuario = getCookie("id_usuario");

document.getElementById("cr-id_usuario").value = idUsuario;
