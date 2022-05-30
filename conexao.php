<?php
    $servidor = "localhost";
    $usuario = "root";
    $senha = "";
    $dbname = "heroimarvel";

    $conexao = mysqli_connect($servidor, $usuario, $senha, $dbname);

    if(!$conexao){
        echo("Houve um erro".mysqli_connect_error());
    }

?>