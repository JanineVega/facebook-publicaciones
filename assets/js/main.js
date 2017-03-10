function validateForm(){
// ----------------Validando ------------------------------------------------

    var correo        =   document.getElementById("input-email").value;
    var emailError    =   document.getElementById("email-error");
    var contrasena      = document.getElementById("input-password").value;
    var contrasenaError = document.getElementById("password-error");
    var usuarios=[{emailok:"janine@laboratoria.com", contrasenaok:"123456"},
                  {emailok:"janetth@laboratoria.com", contrasenaok:"1111111"},
                  ];

    var boton         =   document.getElementById("validar");

      if(correo.length==0 || contrasena.length==0){
        alert("Llene todos los datos");
        return false;
      }
      if ((!(/^[\w]+@{1}[\w]+\.+[a-z]{3}$/.test(correo)))){

        emailError.innerHTML = "Dirección de email es invalida.";
        return false;
      } else {
        emailError.innerHTML="";
      }
        var x=0;
         for ( var prop in usuarios){
            if(usuarios[prop].emailok==correo){
                x=1;
                if(usuarios[prop].contrasenaok==contrasena){
                  alert("next");
                  return false;
                }else{
                  contrasenaError.innerHTML = "Contraseña es incorrecta";
                }
                break;

            }
         }
         if(x==0){
           emailError.innerHTML = "El usuario es invalido.";
           return false;
         } else {
           emailError.innerHTML="";
         }
}
