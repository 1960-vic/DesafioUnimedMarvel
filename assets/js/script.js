const timestamp = '1653662078';
const publicKey = 'd65ff02dd108a2d1a07984d34af35806';
const md5 = 'f3420e15939809f85838a7540af1198c';

var xml = new XMLHttpRequest();
xml.open('GET', `http://gateway.marvel.com/v1/public/characters?ts=${timestamp}&apikey=${publicKey}&hash=${md5}`);

xml.addEventListener('load', function(){
    var respostaServidor = xml.responseText;
    var respostaHerois = JSON.parse(respostaServidor);
    var herois = respostaHerois.data.results;

    for(i = 0; i < herois.length; i++){
        var heroi = herois[i];
        var nome = heroi['name'];
        var descricao = heroi['description'];
        if(descricao == ""){
            descricao = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce facilisis varius consectetur. Praesent fermentum ex et lacus eleifend rhoncus eu non odio. Sed tellus mauris, ullamcorper at posuere quis, convallis non nunc."
        }
        var imagemPath = heroi['thumbnail']['path'];
        var imagemExtension = heroi['thumbnail']['extension'];
        var src = `${imagemPath}.${imagemExtension}`;

        adicionaCardNaPagina(src, nome, nome, descricao);
    };
    
    var buscaCardHerois = document.querySelectorAll('.card__container');
    for(i = 0; i < buscaCardHerois.length; i++){
        var contaVotos = 0;
        var cardHeroi = buscaCardHerois[i];
        var botaoFavoritar = cardHeroi.querySelector('.card__button');
        var cardSpan = cardHeroi.querySelector('.card__votos');
        console.log(cardSpan);
         botaoFavoritar.addEventListener('click', function(){
             contaVotos = contaVotos + 1;
             console.log(contaVotos);
             cardSpan.textContent = contaVotos;
         });
        

    };
});

xml.send();


