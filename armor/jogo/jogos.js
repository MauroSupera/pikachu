const fs = require('fs')


let palavrasANA = [
  {
    original: 'Bulbasaur',
    embaralhada: 'labusrauB',
    dica: 'Pokémon inicial de grama'
  },
  {
    original: 'Charmander',
    embaralhada: 'rdraneahCm',
    dica: 'Pokémon inicial de fogo'
  },
  {
    original: 'Squirtle',
    embaralhada: 'urtleqiuS',
    dica: 'Pokémon inicial de água'
  },
  {
    original: 'Pikachu',
    embaralhada: 'uhacikP',
    dica: 'Rato elétrico amarelo'
  },
  {
    original: 'Clefairy',
    embaralhada: 'yirfaleC',
    dica: 'Pokémon de fada'
  },
  {
    original: 'Jigglypuff',
    embaralhada: 'yjffugilpJ',
    dica: 'Pokémon cantor'
  },
  {
    original: 'Meowth',
    embaralhada: 'htwoeM',
    dica: 'Pokémon gato que fala'
  },
  {
    original: 'Psyduck',
    embaralhada: 'ckudysP',
    dica: 'Pokémon pato psíquico'
  },
  {
    original: 'Growlithe',
    embaralhada: 'eihtilworG',
    dica: 'Pokémon cachorro de fogo'
  },
  {
    original: 'Poliwag',
    embaralhada: 'gliwaPoi',
    dica: 'Pokémon girino'
  },
  {
    original: 'Abra',
    embaralhada: 'rbaA',
    dica: 'Pokémon psíquico'
  },
  {
    original: 'Machop',
    embaralhada: 'pmhcaoM',
    dica: 'Pokémon lutador'
  },
  {
    original: 'Bellsprout',
    embaralhada: 'blsuropetlB',
    dica: 'Pokémon planta'
  },
  {
    original: 'Geodude',
    embaralhada: 'oguedoG',
    dica: 'Pokémon pedra'
  },
  {
    original: 'Slowpoke',
    embaralhada: 'epokwolS',
    dica: 'Pokémon lento'
  },
  {
    original: 'Gastly',
    embaralhada: 'ytsalG',
    dica: 'Pokémon fantasma'
  },
  {
    original: 'Onix',
    embaralhada: 'xinO',
    dica: 'Pokémon pedra serpente'
  },
  {
    original: 'Drowzee',
    embaralhada: 'zeeDrwo',
    dica: 'Pokémon hipnose'
  },
  {
    original: 'Voltorb',
    embaralhada: 'robtlovV',
    dica: 'Pokémon esfera elétrica'
  },
  {
    original: 'Cubone',
    embaralhada: 'neobuC',
    dica: 'Pokémon órfão'
  },
  {
    original: 'Hitmonlee',
    embaralhada: 'eelnotimH',
    dica: 'Pokémon lutador pernas longas'
  },
  {
    original: 'Hitmonchan',
    embaralhada: 'namnohtiHc',
    dica: 'Pokémon lutador socos'
  },
  {
    original: 'Koffing',
    embaralhada: 'giffnKo',
    dica: 'Pokémon gás venenoso'
  },
  {
    original: 'Rhyhorn',
    embaralhada: 'rhnRooy',
    dica: 'Pokémon chifre'
  },
  {
    original: 'Tangela',
    embaralhada: 'galegnaT',
    dica: 'Pokémon vinhas'
  },
  {
    original: 'Kangaskhan',
    embaralhada: 'knaKhsagnas',
    dica: 'Pokémon mãe'
  },
  {
    original: 'Horsea',
    embaralhada: 'earHos',
    dica: 'Pokémon cavalo marinho'
  },
  {
    original: 'Goldeen',
    embaralhada: 'needloG',
    dica: 'Pokémon peixe dourado'
  },
  {
    original: 'Staryu',
    embaralhada: 'yurSta',
    dica: 'Pokémon estrela'
  },
  {
    original: 'Mr. Mime',
    embaralhada: 'emriMr .eM',
    dica: 'Pokémon mímico'
  },
  {
    original: 'Scyther',
    embaralhada: 'rehcytcS',
    dica: 'Pokémon inseto voador'
  },
  {
    original: 'Jynx',
    embaralhada: 'nxJy',
    dica: 'Pokémon gelo psíquico'
  },
  {
    original: 'Electabuzz',
    embaralhada: 'tbuzbzletecA',
    dica: 'Pokémon elétrico'
  },
  {
    original: 'Magmar',
    embaralhada: 'ragmaM',
    dica: 'Pokémon fogo'
  },
  {
    original: 'Pinsir',
    embaralhada: 'risniP',
    dica: 'Pokémon inseto'
  },
  {
    original: 'Tauros',
    embaralhada: 'soruTa',
    dica: 'Pokémon touro'
  },
  {
    original: 'Magikarp',
    embaralhada: 'gikarakpM',
    dica: 'Pokémon peixe fraco'
  },
  {
    original: 'Lapras',
    embaralhada: 'sarpaL',
    dica: 'Pokémon transportador de pessoas'
  },
  {
    original: 'Ditto',
    embaralhada: 'oitDt',
    dica: 'Pokémon transformista'
  },
  {
    original: 'Eevee',
    embaralhada: 'veEee',
    dica: 'Pokémon evolutivo'
  },
  {
    original: 'Porygon',
    embaralhada: 'opoygnrP',
    dica: 'Pokémon virtual'
  },
  {
    original: 'Omanyte',
    embaralhada: 'otymnOea',
    dica: 'Pokémon fóssil'
  },
  {
    original: 'Kabuto',
    embaralhada: 'utoKab',
    dica: 'Pokémon fóssil'
  },
  {
    original: 'Aerodactyl',
    embaralhada: 'talcydoreA',
    dica: 'Pokémon pré-histórico'
  },
  {
    original: 'Snorlax',
    embaralhada: 'laxronS',
    dica: 'Pokémon dorminhoco'
  },
  {
    original: 'Dratini',
    embaralhada: 'iDirtna',
    dica: 'Pokémon dragão'
  },
  {
    original: 'Chikorita',
    embaralhada: 'ahitokirC',
    dica: 'Pokémon planta'
  },
  {
    original: 'Cyndaquil',
    embaralhada: 'lyiudqCina',
    dica: 'Pokémon fogo'
  },
  {
    original: 'Totodile',
    embaralhada: 'otelodioT',
    dica: 'Pokémon água'
  },
  {
    original: 'Sentret',
    embaralhada: 'tfertneS',
    dica: 'Pokémon esquilo'
  },
  {
    original: 'Hoothoot',
    embaralhada: 'thohooHt',
    dica: 'Pokémon coruja'
  },
  {
    original: 'Ledyba',
    embaralhada: 'yadebL',
    dica: 'Pokémon joaninha'
  },
  {
    original: 'Spinarak',
    embaralhada: 'nkarapinS',
    dica: 'Pokémon aranha'
  },
  {
    original: 'Togepi',
    embaralhada: 'epigoT',
    dica: 'Pokémon ovo'
  },
  {
    original: 'Mareep',
    embaralhada: 'peraeM',
    dica: 'Pokémon elétrico'
  }
];



const showdomilhao = [
{
original: 'AMEIXA',
foto: 'https://telegra.ph/file/84928021bd4e6dfe8ff8c.jpg'
}, 
{
original: '100',
foto: 'https://telegra.ph/file/1530a82843034f1ede5d5.jpg'
}
]	

//======== QUIZ DE ANIMAIS =======\\
let quizanimais = [
{
original: 'PORQUINHO DA ÍNDIA',
foto: 'https://i.ibb.co/Fqwr0W0/cb2bb96f29e3.jpg'
},
{
original: 'HAMSTER',
foto: 'https://i.ibb.co/Qb3npqg/c43fae235c0a.jpg'
},
{
original: 'ROTTWEILER',
foto: 'https://telegra.ph/file/a10ad7df6ab6a2312a1f9.jpg'
},
{
original: 'FLOPPA',
foto: 'https://telegra.ph/file/7633abcd83b8a587f418d.jpg'
},
{
original: 'GUAXINIM',
foto: 'https://telegra.ph/file/3800c7048d04a1c3dbc4e.jpg'
},
{
original: 'ZEBRA',
foto: 'https://telegra.ph/file/a08e224344e34aa916972.jpg'
},
{
original: 'CARNEIRO',
foto: 'https://telegra.ph/file/096342c8c7815ba9d83be.jpg'
},
{
original: 'BODE',
foto: 'https://telegra.ph/file/ff574a82178089f453444.jpg'
},
{
original: 'MAMUTE',
foto: 'https://telegra.ph/file/00e445dde6c036a0c0df5.jpg'
},
{
original: 'ALPACA',
foto: 'https://telegra.ph/file/a201b23b179392f1cdd7f.jpg'
},
{
original: 'PORCO ESPINHO',
foto: 'https://telegra.ph/file/7b180efc77c8ab6e9a24a.jpg'
},
{
original: 'QUOKKA',
foto: 'https://telegra.ph/file/3042e66a22c6d0fb6e0cd.jpg'
},
{
original: 'PANDA VERMELHO',
foto: 'https://telegra.ph/file/a6517debde47b846073cc.jpg'
},
{
original: 'PEIXE GOTA',
foto: 'https://telegra.ph/file/e8892204b373c147bf489.jpg'
},
{
original: 'PEIXE MANDARIM',
foto: 'https://telegra.ph/file/e8892204b373c147bf489.jpg'
},
{
original: 'DRAGÃO DE KOMODO',
foto: 'https://telegra.ph/file/d4c36b449f4c781533f3c.jpg'
},
{
original: 'GUEPARDO',
foto: 'https://telegra.ph/file/0016017b9d28a3b6d027a.jpg'
},
{
original: 'FURÃO',
foto: 'https://telegra.ph/file/e352b4831db11c20a3c62.jpg'
},
{
original: 'LEOPARDO',
foto: 'https://telegra.ph/file/71f5f532ced0fddc08f5b.jpg'
},
{
original: 'LEBRE',
foto: 'https://telegra.ph/file/89f9a46ce660261279477.jpg'
},
{
original: 'MARRECO',
foto: 'https://telegra.ph/file/aa41bde6c4c350ec9d0d4.jpg'
},
{
original: 'GANSO',
foto: 'https://telegra.ph/file/9ab69884414feefc9c109.jpg'
},
{
original: 'CAVALO MARINHO',
foto: 'https://telegra.ph/file/e4cee57d5b731dfffa5d8.jpg'
},
{
original: 'CROCODILO',
foto: 'https://telegra.ph/file/b4483f9a7077fd29a137f.jpg'
},
{
original: 'ORNITORRINCO',
foto: 'https://telegra.ph/file/8ffdd62da1834433112be.jpg'
},
{
original: 'HUSKY SIBERIANO',
foto: 'https://telegra.ph/file/07b98023259637951ba8f.jpg'
},
{
original: 'CAPIVARA',
foto: 'https://telegra.ph/file/54f20cbd80737fe45a284.jpg'
}
]


module.exports = {
palavrasANA, 
quizanimais, 
showdomilhao
}