var box_projetos = document.querySelector('div.box-projetos')
var text_projetos = document.querySelector("p.text-projetos")

var isExpanded = false; // Variável de controle para alternar entre os dois estados

function aumentarEDiminuirBoxProjetos() { 
    if (!isExpanded) {
        box_projetos.style.width = "500px";
        box_projetos.style.height = "300px";
        text_projetos.hidden = true;
        isExpanded = true;
    } else {
        box_projetos.style.width = "100px";
        box_projetos.style.height = "100px";
        text_projetos.hidden = false;
        isExpanded = false;
    }
};

document.addEventListener("DOMContentLoaded", load, false);