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
  localStorage.clear();
}