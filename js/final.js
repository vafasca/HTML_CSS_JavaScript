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
    //document.getElementById("botonimpar").disabled = true;
    var impar = document.querySelectorAll(".impar");
    var par = document.querySelectorAll(".par");
    for (let index = 0; index < impar.length; index++) {
        impar[index].classList.remove("impar");
        impar[index].classList.toggle("par");
        //
        par[index].classList.remove("par");
        par[index].classList.toggle("impar");
    }
}


const colorPortafolio = () =>{
    var cambiar = document.querySelector(".titulo");
    var cambiar2 = document.querySelector(".lista-menu-portafolio ul li a");
    var fondo = document.getElementById("fondo_alt");
    console.log(fondo);
    fondo.classList.toggle("portafoliobody2");
    cambiar.classList.toggle("retitulo");
}
