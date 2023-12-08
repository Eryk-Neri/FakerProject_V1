<!DOCTYPE html>
<html lang="pt-br">
<head>
    <?php require("head.php")?>
    <style>
        .tutoria{
            display:flex;
            margin: 1% auto;
            background:#fff;
            width:50% ;
            height:65vh
        }
        .grid-button{
            display:flex;
            justify-content: space-evenly;
        }
        a{
        font-weight: 800;
        }
    </style>
</head>
<body><div class="navbar">
        <img src="img/navbarTutorial.png" alt="" style="background-size:cover">
    </div>
    <div class="tutoria">
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/L_8vtbi-Fkk" title="fake quiz   tutorial" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    
    </div>
    <div class="grid-button">
        <div class='button'>
        <a href="./">home</a></div>
        <div class='button'>
        <a href="/creditos.php">creditos</a></div>
    </div>
</body>
</html>