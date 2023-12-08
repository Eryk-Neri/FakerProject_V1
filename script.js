(function() {

    var questions = [
    {
      question: 'Senhora chinesa se confunde e reza para personagem de League of Legends na China <br><img src="img/fakeLOL.webp" alt="" style="width:100%">',
      choices: ['verdadeiro', 'falso'],
      correctAnswer: 0
    },/* {
      question: 'Greta Thunberg posta video no twiter atirando com fuzil usado para prática esportiva <br><iframe width="683" height="350" src="https://www.youtube.com/embed/Na7xs6Tehg0" title="Greta Thunberg posta no twiter atirando com fuzil" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
      choices: ['verdadeiro', 'falso'],
      correctAnswer: 1
    }, {
      question: 'Mulher contrata homem para matá-la, leva calote e entra na Justiça<br><img src="img/mulher.jpg" alt="" style="height:350px; display:flex; margin:0 auto;">',
      choices: ['verdadeiro', 'falso'],
      correctAnswer: 0
    },  {
    question: 'Casimito declarou apoio ao presidente Jair Bolsonaro candidato à reeleição. <br><img src="img/casimiro.png" alt="" style="height:350px; display:flex; margin:0 auto;">',
      choices: ['verdadeiro', 'falso'],
      correctAnswer: 1
    },{
      question: 'Harvard comprovou eficácia de hidroxicloroquina na prevenção da covid-19 <br><img src="img/harvard.jfif" alt="" style="height:350px; display:flex; margin:0 auto;">',
      choices: ['verdadeiro', 'falso'],
      correctAnswer: 1
    },{
        question: 'Japonês gasta R$ 75 mil e realiza sonho de se transformar em cão <br><img src="img/caoJapones.webp" alt="" style="height:350px; display:flex; margin:0 auto;">',
        choices: ['verdadeiro', 'falso'],
        correctAnswer: 0
    },{
        question: 'Veja agora o teste oficial para motorista do presidente dos Estados Unidos<br><iframe width="683" height="350"" src="https://www.youtube.com/embed/WmJod5LuZjc" title="TESTE OFICIAL PARA MOTORISTA DO PRESIDENTE DOS ESTADOS UNIDOS" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        choices: ['verdadeiro', 'falso'],
        correctAnswer: 1
    },{
        question: 'Esquilo de estimação vira herói nos EUA ao impedir roubo de casa<br><img src="img/esquiloHeroi.webp" alt="" style="height:350px; display:flex; margin:0 auto;">',
        choices: ['verdadeiro', 'falso'],
        correctAnswer: 0
    },{
        question: 'Janones disse que Lula vai acabar com o Auxílio Brasil<br><img src="img/lula.jfif" alt="" style="height:350px; display:flex; margin:0 auto;">',
        choices: ['verdadeiro', 'falso'],
        correctAnswer: 1
    },{
        question: 'Aluno tenta pular portão de colégio ao chegar atrasado para ENEM<br><div style="display:flex; margin:0 auto; justify-content:center"><blockquote class="twitter-tweet"><p lang="pt" dir="ltr">🚨O show dos atrasados do enem começou! <a href="https://t.co/exRigXPe9x">pic.twitter.com/exRigXPe9x</a></p>&mdash; BuzzFeed Brasil (@BuzzFeedBrasil) <a href="https://twitter.com/BuzzFeedBrasil/status/1591827228396081158?ref_src=twsrc%5Etfw">November 13, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></div></script>',
        choices: ['verdadeiro', 'falso'],
        correctAnswer: 1
    },*/
  ];
    
    var questionCounter = 0; // Rastreia o número da pergunta
    var selections = []; //Array contendo as escolhas do usuário
    var quiz = $('#quiz'); // Objeto div do questionário
    
    // Exibe a pergunta inicial
    displayNext();
    
    // Manipulador de cliques para o botão 'próximo'
    $('#next').on('click', function (e) {
      e.preventDefault();
      
      // Suspende o ouvinte de clique durante a animação de fade
      if(quiz.is(':animated')) {        
        return false;
      }
      choose();
      
      // Se não houver seleção de usuário, o progresso é interrompido
      if (isNaN(selections[questionCounter])) {
        alert('selecione um opção!');
      } else {
        questionCounter++;
        displayNext();
      }
    });
    
    /* Manipulador de cliques para o botão 'anterior'
    $('#prev').on('click', function (e) {
      e.preventDefault();
      
      if(quiz.is(':animated')) {
        return false;
      }
      choose();
      questionCounter--;
      displayNext();
    });*/
    
    // Manipulador de cliques para o botão 'Reiniciar'
    $('#start').on('click', function (e) {
      e.preventDefault();
      
      if(quiz.is(':animated')) {
        return false;
      }
      questionCounter = 0;
      selections = [];
      displayNext();
      $('#start').hide();
    });
    $('#Gravar').on('click', function (e) {
      e.preventDefault();
      
      if(quiz.is(':animated')) {
        return false;
      }
      selections = [];
      displayNext();
      $('#Gravar').hide();
    });
    
    // Anima os botões ao passar o mouse
    $('.button').on('mouseenter', function () {
      $(this).addClass('active');
    });
    $('.button').on('mouseleave', function () {
      $(this).removeClass('active');
    });
    
    // Cria e retorna o div que contém as questões e
    // as seleções de resposta
    function createQuestionElement(index) {
      var qElement = $('<div>', {
        id: 'question'
      });
      
      var header = $('<h2>Pergunta ' + (index + 1) + ':</h2>');
      qElement.append(header);
      
      var question = $('<p>').append(questions[index].question);
      qElement.append(question);
      
      var radioButtons = createRadios(index);
      qElement.append(radioButtons);
      
      return qElement;
    }
    
    // Cria uma lista de opções de resposta como entradas de rádio
    function createRadios(index) {
      var radioList = $('<div class="button_resps_quiz">');
      var item;
      var input = '';
      for (var i = 0; i < questions[index].choices.length; i++) {
        item = $('<div>');
        input = '<input type="radio" name="answer" value=' + i + ' />';
        input += questions[index].choices[i];
        item.append(input);
        radioList.append(item);
      }
      return radioList;
    }
    
    // Lê a seleção do usuário e envia o valor para um array
    function choose() {
      selections[questionCounter] = +$('input[name="answer"]:checked').val();
    }
    
    // Exibe o próximo elemento solicitado
    function displayNext() {
      quiz.fadeOut(function() {
        $('#question').remove();
        
        if(questionCounter < questions.length){
          var nextQuestion = createQuestionElement(questionCounter);
          quiz.append(nextQuestion).fadeIn();
          if (!(isNaN(selections[questionCounter]))) {
            $('input[value='+selections[questionCounter]+']').prop('checked', true);
          }
          
          // Controla a exibição do botão 'anterior'
          if(questionCounter === 1){
            $('#prev').show();
          } else if(questionCounter === 0){
            
            $('#prev').hide();
            $('#next').show();
          }
        }else {
          var scoreElem = displayScore();
          quiz.append(scoreElem).fadeIn();
          $('#next').hide();
          $('#prev').hide();
          $('#start').show();
        }
      });
    }
    
    // Calcula a pontuação e retorna um elemento de parágrafo a ser exibido
    function displayScore() {
      $('#salvar').removeClass('display_none');
      var score = $('<p>',{id: 'question'});
      
      var numCorrect = 0;

      for (var i = 0; i < selections.length; i++) {
        if (selections[i] === questions[i].correctAnswer) {
          numCorrect++;
        }
      }
      $("#salvar").fadeIn();

      score.append('Parabens voce acertou ' + numCorrect + ' de ' + questions.length + '<br>Insira seu nick:<input id="username" type=text placeholder="Insira seu nick">');
      
      $('#salvar').click(function(){
        var nome = $('#username').val();
        if(nome == ''){
          nome = "-"
        }else{}
        var usuario = {
          'nome': nome,
          'Pontos': numCorrect
        }
        // var test = {
        //   "variavel": usuario
        // }
        var dados = JSON.stringify(usuario);
       
        $.ajax({
          url: 'placar.php',
          type: 'POST',
          data: {data: dados},
          success: function(result){
            // Retorno se tudo ocorreu normalmente
          },
          error: function(jqXHR, textStatus, errorThrown) {
            // Retorno caso algum erro ocorra
          }
        });
      });

     
      return score;
    }
  })();