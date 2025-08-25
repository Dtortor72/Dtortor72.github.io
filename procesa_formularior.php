<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = htmlspecialchars($_POST['nombre']);
    $email = htmlspecialchars($_POST['email']);
    $telefono = htmlspecialchars($_POST['telefono']);
    $mensaje = htmlspecialchars($_POST['mensaje']);
    
    $destinatario = "dajototo@telefonica.net"; // TU CORREO AQUÍ
    $asunto = "Nueva inscripción curso Arduino: $nombre";
    
    $cuerpo = "Nueva inscripción al curso de Arduino:\n\n";
    $cuerpo .= "Nombre: $nombre\n";
    $cuerpo .= "Email: $email\n";
    $cuerpo .= "Teléfono: $telefono\n";
    $cuerpo .= "Mensaje: $mensaje\n";
    $cuerpo .= "\nEnviado el: " . date('d/m/Y H:i:s');
    
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    
    if (mail($destinatario, $asunto, $cuerpo, $headers)) {
        echo "success";
    } else {
        echo "error";
    }
}
?>