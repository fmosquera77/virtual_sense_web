<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = htmlspecialchars($_POST['name']);
    $razonSocial = htmlspecialchars($_POST['company']);
    $tipoIdentificacion = htmlspecialchars($_POST['idType']);
    $numeroIdentificacion = htmlspecialchars($_POST['idNumber']);
    $direccion = htmlspecialchars($_POST['address']);
    $ciudad = htmlspecialchars($_POST['city']);
    $pais = htmlspecialchars($_POST['country']);
    $telefono = htmlspecialchars($_POST['phone']);
    $sitioWeb = htmlspecialchars($_POST['website']);
    $email = htmlspecialchars($_POST['email']);
    $patologias = isset($_POST['pathologies']) ? implode(", ", (array)$_POST['pathologies']) : 'Ninguna';

    // Dirección de correo a la que se enviará el formulario
    $to = ' ';
    $subject = 'Formulario Virtual Sense';

    // Construir el cuerpo del correo
    $message = "
    <html>
    <head>
    <title>$subject</title>
    </head>
    <body>
    <h2>Detalles del formulario</h2>
    <p><strong>Nombre y Apellido:</strong> $nombre</p>
    <p><strong>Razón Social:</strong> $razonSocial</p>
    <p><strong>Tipo de identificación:</strong> $tipoIdentificacion</p>
    <p><strong>Número de identificación:</strong> $numeroIdentificacion</p>
    <p><strong>Dirección:</strong> $direccion</p>
    <p><strong>Ciudad:</strong> $ciudad</p>
    <p><strong>País:</strong> $pais</p>
    <p><strong>Teléfono:</strong> $telefono</p>
    <p><strong>Sitio Web:</strong> $sitioWeb</p>
    <p><strong>Email:</strong> $email</p>
    <p><strong>Patologías de interés:</strong> $patologias</p>
    </body>
    </html>
    ";

    // Cabeceras del correo
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers .= " " . "\r\n";

    // Enviar el correo
    if (mail($to, $subject, $message, $headers)) {
        echo "<script type='text/javascript'>
            alert('Formulario enviado con éxito');
            document.getElementById('myForm').reset();
          </script>";
    } else {
        echo "<script type='text/javascript'>
            alert('Error al enviar el correo.');
          </script>";
    }
}
