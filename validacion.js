//Haz tú validación en javascript acá

let nombre = document.getElementById("nombre");
let email = document.getElementById("email");
let asunto = document.getElementById("asunto");
let mensaje = document.getElementById("mensagem");
let form = document.getElementById("form");
let enviar = document.getElementById("enviar");
let error = document.getElementById("error");
error.style.color = 'red';



form.addEventListener("submit", function(event){
    event.preventDefault();
    let mensajesError = [];

    if(nombre.value === null || nombre.value === ""){
        mensajesError.push("Ingresa tu nombre");
    }

    if(email.value === null || email.value === ""){
        mensajesError.push("Ingresa tu correo");
    }

    if(asunto.value === null || asunto.value === ""){
        mensajesError.push("Ingresa tu asunto");
    }

    if(mensaje.value === null || mensaje.value === ""){
        mensajesError.push("Ingresa tu mensaje");
    }

    error.innerHTML =  mensajesError.join(', ');

});

/*
form.addEventListener("submit", enviarCorreo);

function enviarCorreo(evento){
    evento.preventDefault();
    if(
        mensajesError === false
    ) {
        const form = new FormData(this);
        form.get("nombre");
        form.get("email");
        form.get("asunto");
        form.get("mensaje");

        enviar.setAttribute(
            "href",
            `gabrielcamposramirez@outlook.com?subject=nombre:${form.get("nombre")},E-mail: ${form.get("email")},Asunto: ${form.get("asunto")},&body=${form.get("mensaje")}`
        );
        enviar.click();
    }

    console.log("mensaje enviado");
}; */