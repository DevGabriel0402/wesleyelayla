const btnConfirmar = document.getElementById("btn-confirmar");
const toastInfo = document.getElementById("toast");

btnConfirmar.addEventListener("click", () => {
  // Mostra o toast informativo
  toastInfo.classList.remove("hidden");

  // Aguarda 10.5 segundos antes de redirecionar para o link do WhatsApp e esconder o toast
  setTimeout(() => {
    window.location.href =
      "https://api.whatsapp.com/send?phone=5531991660562&text=Ol%C3%A1,%20gostaria%20de%20*confirmar%20a%20minha%20presen%C3%A7a*%20no%20casamento%20do%20Wesley%20e%20Layla!";

    // Esconde o toast informativo
    toastInfo.classList.add("hidden");
  }, 10500); // 10500 milissegundos = 10.5 segundos
});
