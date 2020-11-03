const cartas = document.querySelectorAll('[data-carta]');

let jaVirouCarta = false;
let bloqueiaCartas = false;
let primeiraCarta, segundaCarta;

cartas.forEach(carta => carta.addEventListener('click', viraCarta));

function viraCarta() {

  if (bloqueiaCartas) return;
  if (this === primeiraCarta) return;

  this.classList.add('virada');

  if (!jaVirouCarta) {
    jaVirouCarta = true;
    primeiraCarta = this;

    return;
  }

  segundaCarta = this;
  checkForMatch();
}


function checkForMatch() {
  
  if (primeiraCarta.dataset.carta === segundaCarta.dataset.carta) {
    disableCards();
    return;
  }

  desviraCartas();
}

function disableCards() {

  primeiraCarta.removeEventListener('click', viraCarta);
  segundaCarta.removeEventListener('click', viraCarta);

  limpaCartas();
  
  let carasViradas = 0;
  cartas.forEach(carta => {
    if(carta.classList.contains('virada')){
      carasViradas++;
    }
  })

  if(carasViradas == cartas.length){

    setTimeout( () => {
      telaCompleta();
    }, 800)
  }

}


function desviraCartas() {

  bloqueiaCartas = true;

  setTimeout(() => {

    primeiraCarta.classList.remove('virada');
    segundaCarta.classList.remove('virada');
    limpaCartas();

  }, 1000);
}

function limpaCartas() {

  [jaVirouCarta, bloqueiaCartas] = [false, false];
  [primeiraCarta, segundaCarta] = [null, null]; 
}

function telaCompleta() {

  const pagina = document.querySelector('section');

  const janela = document.createElement('div');
  janela.classList.add('parabens-cx');
  janela.innerHTML = `
  <h3> Parabéns, você venceu!!! </h3>
  <button data-reinicio>Reiniciar</button>
  `;

  pagina.appendChild(janela);

  document.querySelector('[data-reinicio]').addEventListener('click', () => location.reload() )
}

 



