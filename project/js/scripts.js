document.getElementById("criptografar").addEventListener("click", function() {
    criptografar();
});

document.getElementById("descriptografar").addEventListener("click", function() {
    descriptografar();
});

document.getElementById("copiar").addEventListener("click", function() {
    copiarTexto();
});

function criptografar() {
    let texto = document.getElementById("inputText").value;
    let resultado = texto.replace(/e/g, "enter")
                         .replace(/i/g, "imes")
                         .replace(/a/g, "ai")
                         .replace(/o/g, "ober")
                         .replace(/u/g, "ufat");
    document.getElementById("outputText").innerText = resultado;
    document.querySelector('.texto-criptografado').classList.remove('d-none');
    document.querySelector('.sem-retorno').classList.add('d-none');
}

function descriptografar() {
    let texto = document.getElementById("inputText").value;
    let resultado = texto.replace(/enter/g, "e")
                         .replace(/imes/g, "i")
                         .replace(/ai/g, "a")
                         .replace(/ober/g, "o")
                         .replace(/ufat/g, "u");
    document.getElementById("outputText").innerText = resultado;
    document.querySelector('.texto-criptografado').classList.remove('d-none');
    document.querySelector('.sem-retorno').classList.add('d-none');
}

function copiarTexto() {
    let textoCopiado = document.getElementById("outputText").innerText;
    navigator.clipboard.writeText(textoCopiado).then(() => {
        alert('Texto copiado com sucesso!');
    });
}
