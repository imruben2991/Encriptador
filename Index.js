   // Función para encriptar el texto
   function encryptText(text) {
    text = text.toLowerCase();

    text = text.replace(/e/g, "enter");
    text = text.replace(/i/g, "imes");
    text = text.replace(/a/g, "ai");
    text = text.replace(/o/g, "ober");
    text = text.replace(/u/g, "ufat");

    return text;
  }

  // Función para desencriptar el texto
  function decryptText(text) {
    text = text.toLowerCase();

    text = text.replace(/enter/g, "e");
    text = text.replace(/imes/g, "i");
    text = text.replace(/ai/g, "a");
    text = text.replace(/ober/g, "o");
    text = text.replace(/ufat/g, "u");

    return text;
  }

  // Función para procesar el texto según la opción seleccionada
  function processText() {
    var option = document.querySelector('input[name="option"]:checked').value;
    var inputText = document.getElementById("input-text").value;
    var result = document.getElementById("result");

    var processedText;
    if (option === "encrypt") {
      processedText = encryptText(inputText);
    } else {
      processedText = decryptText(inputText);
    }

    result.textContent = processedText;
  }