function encryptText() {
  const inputText = document.getElementById("texto").value;
  const encryptStatus = document.getElementById("titulo-mensaje");
  const message = document.getElementById("parrafo");
  const image = document.getElementById("muñeco");

  if (inputText.length !== 0) {
      const encryptedText = inputText
          .replace(/e/gi, "enter")
          .replace(/i/gi, "imes")
          .replace(/a/gi, "ai")
          .replace(/o/gi, "ober")
          .replace(/u/gi, "ufat");

      document.getElementById("textoEncriptado").value = encryptedText;

      encryptStatus.textContent = "Texto encriptado con éxito";
      message.textContent = "";
      image.src = "./img/encriptado.png";

  } else {
      image.src = "./img/muñeco.png";
      encryptStatus.textContent = "Ningún mensaje fue encontrado";
      message.textContent = "Ingresa el texto que deseas encriptar o desencriptar.";
      alert("Ooops! Debes ingresar un texto.");
  }
}


function decryptText() {
  const inputText = document.getElementById("texto").value;
  const decryptStatus = document.getElementById("titulo-mensaje");
  const message = document.getElementById("parrafo");
  const image = document.getElementById("muñeco");

  if (inputText.length !== 0) {
      document.getElementById("textoEncriptado").value = inputText
          .replace(/enter/gi, "e")
          .replace(/imes/gi, "i")
          .replace(/ai/gi, "a")
          .replace(/ober/gi, "o")
          .replace(/ufat/gi, "u");

      decryptStatus.textContent = "Texto desencriptado con éxito";
      message.textContent = "";
      image.src = "./img/desencriptado.png";
  } else {
      image.src = "./img/muñeco.png";
      decryptStatus.textContent = "Ningún mensaje fue encontrado";
      message.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
      alert("Ooops! Debes ingresar un texto.");
  }
}

function copyToClipboard() {
  const textoEncriptado = document.getElementById("textoEncriptado").value;

  if (textoEncriptado.length !== 0) {
      navigator.clipboard.writeText(textoEncriptado)
          .then(() => {
              alert("Texto copiado al portapapeles");
          })
          .catch((error) => {
              console.error("Error al copiar al portapapeles:", error);
          });
  } else {
      alert("No hay texto para copiar");
  }
}
