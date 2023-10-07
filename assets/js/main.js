// Função para mostrar/ocultar o texto
function mostrarOcultarTexto(idTexto) {
    var texto = document.getElementById(idTexto);
    var barra = document.querySelector(".barra");

    if (texto.style.maxHeight === "0px" || texto.style.maxHeight === "") {
        texto.style.maxHeight = texto.scrollHeight + "px";
        barra.classList.add("texto-visivel");
    } else {
        texto.style.maxHeight = "0px";
        barra.classList.remove("texto-visivel");
    }
}