<!DOCTYPE html>
<html lang="pt-br">
<head>
    <?php require("head.php")?>
</head>
<body style="heigth: 100vh">
<div class="navbar">
    <img src="img/navbarRanking.png" alt="" style="background-size:cover">
</div>
<div class="tabela-dad">
    <table id="table">
    <tr>
        <th>Nome</th>
        <th>Pontos</th>
    </tr>
    </table>
    
</div>
<div style="display: flex;justify-content: center; margin:10px">
    <div class='button' id='home'> <a href='../'>home</a></div>
</div>

<script> var lista = [];
<?php
$json = file_get_contents("data.json");
$data = json_decode($json);

foreach ($data as $key => $value) {
    echo "lista.push('".$value->nome."');";
    echo "lista.push('".$value->Pontos."');";}?>

$(document).ready(function(){
    lista.length;
    t=1;
    for(i=0;i<lista.length;i+= 2){
        $("#table").append('<tr><th>'+lista[i]+'</th><th>'+lista[t]+'</th></tr>');
        console.log(i)
        t += 2;
    }
});
</script>
</body>
</html>


