const enviar = () => {
    var nombre = document.getElementById("nombre").value;
    var correo = document.getElementById("correo").value;
    var asunto = document.getElementById("asunto").value;
    var mensaje = document.getElementById("mensaje").value;

    if (nombre != "") {
        var nombre = document.getElementById("nombre").value;
        if (correo != "") {
            var correo = document.getElementById("correo").value;
            if (asunto != "") {
                var asunto = document.getElementById("asunto").value;
                if (mensaje != "") {
                    var mensaje = document.getElementById("mensaje").value;
                } else {
                    alert(`El campo "mensaje" es obligatorio`);
                }
            } else {
                alert(`El campo "asunto" es obligatorio`);

            }
        } else {
            alert(`El campo "email" es obligatorio`);
        }
    } else {
        alert(`El campo "nombre" es obligatorio`);
    }
    if (nombre != "" && correo != "" && asunto != "" && mensaje != "") {
        console.log(`Nombre: ${nombre}`);
        console.log(`Correo: ${correo}`);
        console.log(`Asunto: ${asunto}`);
        console.log(`Mensaje: ${mensaje}`);
    }
}

const reset = () => {
    document.getElementById("nombre").value = "";
    document.getElementById("correo").value = "";
    document.getElementById("asunto").value = "";
    document.getElementById("mensaje").value = "";
}

const enviarImPar = () => {
    var impar = document.querySelectorAll(".impar");
    var par = document.querySelectorAll(".par");
    var tam = impar.length;
    console.log(tam);
    for (let index = 0; index < impar.length; index++) {
        impar[index].classList.add("reimpar")
        par[index].classList.remove("repar");
    }
}
const enviarPar = () => {
    var par = document.querySelectorAll(".par");
    var impar = document.querySelectorAll(".impar");
    for (let index = 0; index < par.length; index++) {
        par[index].classList.add("repar")
        impar[index].classList.remove("reimpar");
    }
}

const colorPortafolio = () =>{
    var cambiar = document.querySelector(".titulo");
    var cambiar2 = document.querySelector(".lista-menu-portafolio ul li a");
    cambiar.classList.toggle("retitulo");
}
