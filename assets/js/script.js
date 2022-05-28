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
        var imagemPath = heroi['thumbnail']['path'];
        var imagemExtension = heroi['thumbnail']['extension'];
        var src = `${imagemPath}.${imagemExtension}`;

        var cardDosHerois = adicionaCardNaPagina(src, nome, nome, descricao);
    }
    console.log(cardDosHerois);
});

xml.send();

function adicionaCardNaPagina(src, alt, nome, descricao){
    var card = document.querySelector('.main__container');
    card.appendChild(criaDivCard(src, alt, nome, descricao));

    return card;
}

function criaDivCard(src, alt, nome, descricao){
    var cardHeroi = document.createElement('div');
    cardHeroi.classList.add('card__container');
    cardHeroi.appendChild(criaImg(src, alt));
    cardHeroi.appendChild(criaTitulo(nome));
    cardHeroi.appendChild(criaDescricao(descricao));
    cardHeroi.appendChild(criaBotão());

    return cardHeroi;
}

function criaImg(src, alt){
    var img = document.createElement('img');
    img.classList.add('card__img');
    img.src = src;
    img.alt = `Herói ${alt}`;

    return img;
}

function criaTitulo(nome){
    var title = document.createElement('h3');
    title.classList.add('card__title');
    title.textContent = nome;

    return title;
}

function criaDescricao(descricao){
    var description = document.createElement('p');
    description.classList.add('card__descricao');
    publicKey.textContent = descricao; 

    return description;
}

function criaBotão(){
    var button = document.createElement('button');
    button.classList.add('card__button');
    button.textContent = 'Favoritar';

    return button;
}