const listaCartas = [ 
    {
        tipo: 'bhaskara',
        img: 'bhaskara_a'
    },
    {
        tipo: 'bhaskara',
        img: 'bhaskara_b'
    },
    {
        tipo: 'newton',
        img: 'newton_a'
    },
    {
        tipo: 'newton',
        img: 'newton_b'
    },
    {
        tipo: 'quadrado',
        img: 'quadrado_a'
    },
    {
        tipo: 'quadrado',
        img: 'quadrado_b'
    },
    {
        tipo: 'volume',
        img: 'volume_a'
    },
    {
        tipo: 'volume',
        img: 'volume_b'
    }
    
];

function embaralhaCartas (arr){
    return arr.reduce( 
        (newArr, _, i) => {
            var rand = i + ( Math.floor( Math.random() * (newArr.length - i) ) );
            [newArr[rand], newArr[i]] = [newArr[i], newArr[rand]]
            return newArr
        }, [...arr]
    )
}


function distribuiCartas() {
    const cartasEmbaralhadas = embaralhaCartas(listaCartas);
    const bloco = document.querySelector('[data-lista-cartas]');
    const classesDiv = ['col-6', 'col-md-3', 'pb-3', 'carta-container'];

    cartasEmbaralhadas.forEach ( carta => {
        const novaCarta = document.createElement('div');
        novaCarta.innerHTML = `
            <img class="img-fluid carta-verso" src="img/cards/verso.jpg">
            <img class="img-fluid carta-frente" src="img/cards/${carta.img}.jpg">
        `;
        novaCarta.classList.add(...classesDiv);
        novaCarta.setAttribute('data-carta', `${carta.tipo}`);

        bloco.appendChild(novaCarta);
    })
}

distribuiCartas();