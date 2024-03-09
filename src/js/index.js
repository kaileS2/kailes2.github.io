var box_projetos = document.querySelector('div.box-projetos')
var text_projetos = document.querySelector("p.text-projetos")

box_projetos.addEventListener("click", function() { 
    box_projetos.style.width = "500px"
    box_projetos.style.height = "300px"

    text_projetos.hidden = true

    box_projetos.addEventListener("click", function() {
        box_projetos.style.width = "100px"
        box_projetos.style.height = "100px"

        text_projetos.hidden = false
    })

});

text_projetos.addEventListener("click", function() { 
    box_projetos.style.width = "500px"
    box_projetos.style.height = "300px"

    text_projetos.hidden = true

    box_projetos.addEventListener("click", function() {
        box_projetos.style.width = "100px"
        box_projetos.style.height = "100px"

        text_projetos.hidden = false
    })

});


document.addEventListener("DOMContentLoaded", load, false);