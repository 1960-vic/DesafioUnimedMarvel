var campoPesquisa = document.querySelector('.main__pesquisa');

campoPesquisa.addEventListener('input', function () {

  var herois = document.querySelectorAll('.card__container');

  if (this.value.length > 0) {
    for (var i = 0; i < herois.length; i++) {
        var heroi = herois[i];
        var nome = heroi.querySelector('.card__title');
        var name = nome.textContent;
        var expressao = new RegExp(this.value, 'i');

        if (!expressao.test(name)) {
          heroi.style.display = 'none';
        } else {
          heroi.style.display = 'block';
        }
    }
  } else {
    for (var i = 0; i < herois.length; i++) {
        var heroi = herois[i];
        heroi.style.display = 'block';
    }
  }
});