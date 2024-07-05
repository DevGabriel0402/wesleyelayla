const btnConfirmar = document.getElementById("btn-confirmar");
const toastInfo = document.getElementById("toast");

btnConfirmar.addEventListener("click", () => {
  toastInfo.classList.remove("hidden");
  setTimeout(() => {
    window.open(
      "https://api.whatsapp.com/send?phone=5531991660562&text=Ol%C3%A1,%20gostaria%20de%20*confirmar%20a%20minha%20presen%C3%A7a*%20no%20casamento%20do%20Wesley%20e%20Layla!",
      "_blank"
    );
    toastInfo.classList.add("hidden");
  }, 3500);
});
