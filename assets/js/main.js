

function alerta (){
  alert ("prueba de que si jala el js");
}
alerta();

function validateForm(){

  alert("ai salles");
  var correo          = document.getElementById("inputEmail").value;
  var emailError      = document.getElementById("email-error");
  var contraseña      = document.getElementById("inputPassword").value;
  var contraseñaError = document.getElementById("password-error");

  if (!(/^[\w]+@{1}[\w]+\.+[a-z]{3}$/.test(correo))){
      alert("La dirección de email " + correo + " no es correcta.");
      return false;

    } else if (!(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{6,15}/.test(contraseña))|| contraseña=="password" || contraseña=="123456" || contraseña == "098754"){
      alert("La contraseña es invalida! ");
      contraseñaError.innerHTML = "Debe ser mayor o igual a 6 digitos contener letras y números, almenos un carácter y una letra mayúscula.";
      return false;
    }

}
