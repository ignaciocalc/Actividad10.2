const
   btnGuardar = document.getElementById("buttonText"),
   input = document.getElementById("inputText");

btnGuardar.addEventListener("click", () => localStorage.setItem("input", input.value));