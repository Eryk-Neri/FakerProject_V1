<!DOCTYPE html>
<html lang="pt-br">
<head>
    <?php require("head.php")?>
    <style>
        .grid-button{
            display:flex;
            flex-direction: column;
        }
        .grid{
            display:flex;
            justify-content: space-evenly;
        }
        .button{
            width :300px;
            height:100px;
            font-size: 30px;
            font-weight: 900;
            background: #fff;
            margin: 36px 0;
            display:flex;
            justify-content: center;
            align-items: center;
            text-decoration: none;
        }
        .button active{
            
            filter: opacity(0.5);;
        }
    </style>
</head>
<body id="home">
    <div class="navbar">
        <img src="img/home_bk.png" alt="" style="background-size:cover">
    </div>
    <h1>fake quiz</h1>
    <div class="grid-button">
        <div class="grid">
           
            <a href="quiz.php"class='button'>QUIZ</a>
            <a href="ranking.php"class='button'>RANKING</a>
        </div>
        <div  class="grid">
            <a href="tutorial.php"class='button'>TUTORIAL</a>
            <a href="creditos.php"class='button'>CRÉDITOS</a>
        </div>
    </div>
</body>
</html>