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