var box_projetos = document.querySelector('div.box-projetos');
var text_projetos = document.querySelector("span.text-projetos");
var relogio_digital_link = document.querySelector("a.github-link");
var isExpanded = false;

function fade(element, time) {
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            element.style.display = 'none';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, time);
}

function unfade(element, time) {
    var op = 0.1;  // initial opacity
    element.style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, time);
}

function aumentarEDiminuirBoxProjetos() {
    if (!isExpanded) {
        box_projetos.style.width = "75%";
        box_projetos.style.height = "150px";
        
        fade(text_projetos, 0.1);
        unfade(relogio_digital_link, 60);

        relogio_digital_link.hidden = false;
        text_projetos.hidden = true;
        isExpanded = true;
    } else {
        box_projetos.style.width = "100px";
        box_projetos.style.height = "100px";
        
        unfade(text_projetos, 60);
        fade(relogio_digital_link, 0.5);

        relogio_digital_link.hidden = true;
        text_projetos.hidden = false;
        isExpanded = false;
    }
};