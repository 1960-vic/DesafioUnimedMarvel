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
    cardHeroi.appendChild(criaParagrafoVotos());
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
    description.textContent = descricao; 

    return description;
}

function criaBotão(){
    var button = document.createElement('button');
    button.classList.add('card__button');
    button.textContent = 'Favoritar';

    return button;
}

function criaParagrafoVotos(){
    var span = document.createElement('p');
    span.classList.add('card__votos');
    span.textContent = "";

    return span;
}