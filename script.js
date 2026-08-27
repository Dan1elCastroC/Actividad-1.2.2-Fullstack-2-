function validarFormulario(evento) {
  evento.preventDefault();

  // sacamos los

  // valores de los inputs

  // del html

  let nombre = document.getElementById("nombre").value;

  let email = document.getElementById("email").value;

  let mensaje = document.getElementById("mensaje").value;

  let camposVacios = [];

  // revisamos si estan vacios

  if (nombre.trim() === "") {
    camposVacios.push("Nombre");
  }

  if (email.trim() === "") {
    camposVacios.push("Correo electronico");
  }

  if (mensaje.trim() === "") {
    camposVacios.push("Mensaje");
  }

  // si hay campos vacios mostramos el aler

  // con los errores

  if (camposVacios.length > 0) {
    alert(
      "Porfavor, completa los siguientes campos que faltan:\n- " +
        camposVacios.join("\n- "),
    );
  } else {
    alert("El formulario fue validado y procesado con exito.");
  }
}
