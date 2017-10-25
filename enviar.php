<?php
    
    $destino = "mctribals@gmail.com";
    $nombre = $_POST["nombre"];
    $apellido = $_POST["apellido"];
    $telefono = $_POST["telefono"];
    $email = $_POST["email"];
    $mensaje = $_POST["mensaje"];

    $contenido = "Nombre: " . $nombre . " " . $apellido . "\nCorreo: " . $email . "\nTelefono: " . $telefono . "\nMensaje: " . $mensaje;

    mail($destino,"Contacto",$contenido);

    header("Location:Index.html");

?>