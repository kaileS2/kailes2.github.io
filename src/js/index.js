var box_projetos = document.querySelector('div.box-projetos');
var text_projetos = document.querySelector("p.text-projetos");
var isExpanded = false;

function aumentarEDiminuirBoxProjetos() {
    if (!isExpanded) {
        box_projetos.style.width = "75%";
        box_projetos.style.height = "150px";
        text_projetos.hidden = true;
        isExpanded = true;
    } else {
        box_projetos.style.width = "100px";
        box_projetos.style.height = "100px";
        text_projetos.hidden = false;
        isExpanded = false;
    }
};