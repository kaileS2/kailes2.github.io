var box_projetos = document.querySelector('div.box-projetos');
var text_projetos = document.querySelector("p.text-projetos");
var relogio_digital_link = document.querySelector("a.relogio-digital-link");
var elliot_link = document.querySelector("a.elliot-link")
var isExpanded = false;

function fade(element) {
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            element.style.display = 'none';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 1);
}

function unfade(element) {
    var op = 0.1;  // initial opacity
    element.style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 50);
}

function aumentarEDiminuirBoxProjetos() {
    if (!isExpanded) {
        box_projetos.style.width = "75%";
        box_projetos.style.height = "150px";
        
        fade(text_projetos);
        unfade(relogio_digital_link);
        unfade(elliot_link)

        relogio_digital_link.hidden = false;
        elliot_link.hidden = false
        text_projetos.hidden = true;
        isExpanded = true;
    } else {
        box_projetos.style.width = "100px";
        box_projetos.style.height = "100px";
        
        unfade(text_projetos);
        fade(relogio_digital_link);
        fade(elliot_link)

        relogio_digital_link.hidden = true;
        elliot_link.hidden = true
        text_projetos.hidden = false;
        isExpanded = false;
    }
};