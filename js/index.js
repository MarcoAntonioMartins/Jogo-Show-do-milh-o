const perguntaElemento = document.querySelector('.pergunta');
const opcoesElemento = document.querySelectorAll('.opcoes-generica');
const modalConfirmaElemento = document.getElementById('myModal');
const confirmYesElemento = document.getElementById('confirmYes');
const confirmNoElemento = document.getElementById('confirmNo');
const modalCertaElemento = document.getElementById('modalCerta');
const stopElemento = document.getElementById('stop');
const continueElemento = document.getElementById('continue');
const modalErradaElemento = document.getElementById('modalErrada');
const modalParabensElemento = document.getElementById('modalParabens');

let pontuacao = 0;
let perguntaAtual = 0;
let respostaCorreta = null;
let jogoAtivo = true;

let premios = [
  {
    "Pergunta": 0,
    "Acertar": "1 mil",
    "Parar": "0",
    "Errar": "0"
  },
  {
    "Pergunta": 1,
    "Acertar": "2 mil",
    "Parar": "1 mil",
    "Errar": "R$ 500"
  },
  {
    "Pergunta": 2,
    "Acertar": "3 mil",
    "Parar": "2 mil",
    "Errar": "1 mil"
  },
  {
    "Pergunta": 3,
    "Acertar": "4 mil",
    "Parar": "3 mil",
    "Errar": "1.500"
  },
  {
    "Pergunta": 4,
    "Acertar": "5 mil",
    "Parar": "4 mil",
    "Errar": "2 mil"
  },
  {
    "Pergunta": 5,
    "Acertar": "10 mil",
    "Parar": "5 mil",
    "Errar": "2.500"
  },
  {
    "Pergunta": 6,
    "Acertar": "20 mil",
    "Parar": "10 mil",
    "Errar": "5 mil"
  },
  {
    "Pergunta": 7,
    "Acertar": "30 mil",
    "Parar": "20 mil",
    "Errar": "10 mil"
  },
  {
    "Pergunta": 8,
    "Acertar": "40 mil",
    "Parar": "30 mil",
    "Errar": "15 mil"
  },
  {
    "Pergunta": 9,
    "Acertar": "50 mil",
    "Parar": "40 mil",
    "Errar": "20 mil"
  },
  {
    "Pergunta": 10,
    "Acertar": "100 mil",
    "Parar": "50 mil",
    "Errar": "25 mil"
  },
  {
    "Pergunta": 11,
    "Acertar": "200 mil",
    "Parar": "100 mil",
    "Errar": "50 mil"
  },
  {
    "Pergunta": 12,
    "Acertar": "300 mil",
    "Parar": "200 mil",
    "Errar": "100 mil"
  },
  {
    "Pergunta": 13,
    "Acertar": "400 mil",
    "Parar": "300 mil",
    "Errar": "150 mil"
  },
  {
    "Pergunta": 14,
    "Acertar": "500 mil",
    "Parar": "400 mil",
    "Errar": "200 mil"
  },
  {
    "Pergunta": 15,
    "Acertar": "1 milhão",
    "Parar": "500 mil",
    "Errar": "0"
  }
];

let perguntas = [
  {
    pergunta: "Qual é a capital do Brasil?",
    opcoes: ["São Paulo", "Rio de Janeiro", "Brasília", "Salvador"],
    resposta: 2
  },
  {
    pergunta: "Qual é o maior planeta do sistema solar?",
    opcoes: ["Terra", "Júpiter", "Marte", "Vênus"],
    resposta: 1
  },
  {
    pergunta: "Quem pintou a Mona Lisa?",
    opcoes: ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Michelangelo"],
    resposta: 0
  },
  {
    pergunta: "Qual é a montanha mais alta do mundo?",
    opcoes: ["Monte Everest", "Monte Kilimanjaro", "Monte McKinley", "Monte Aconcágua"],
    resposta: 0
  },
  {
    pergunta: "Quem escreveu 'Dom Quixote'?",
    opcoes: ["Miguel de Cervantes", "William Shakespeare", "Franz Kafka", "Charles Dickens"],
    resposta: 0
  },
  {
    pergunta: "Qual é o rio mais longo do mundo?",
    opcoes: ["Rio Amazonas", "Rio Nilo", "Rio Yangtzé", "Rio Mississipi"],
    resposta: 1
  },
  {
    pergunta: "Qual é a fórmula química da água?",
    opcoes: ["H2O", "CO2", "NaCl", "HCl"],
    resposta: 0
  },
  {
    pergunta: "Quem foi o primeiro homem a pisar na Lua?",
    opcoes: ["Buzz Aldrin", "Yuri Gagarin", "Neil Armstrong", "Alan Shepard"],
    resposta: 2
  },
  {
    pergunta: "Em que ano começou a Segunda Guerra Mundial?",
    opcoes: ["1939", "1941", "1945", "1918"],
    resposta: 0
  },
  {
    pergunta: "Qual é o metal mais abundante na crosta terrestre?",
    opcoes: ["Ferro", "Alumínio", "Cobre", "Ouro"],
    resposta: 1
  },
  {
    pergunta: "Qual é o país de maior extensão territorial do mundo?",
    opcoes: ["Canadá", "China", "Rússia", "Estados Unidos"],
    resposta: 2
  },
  {
    pergunta: "Quem foi o primeiro presidente do Brasil?",
    opcoes: ["Juscelino Kubitschek", "Getúlio Vargas", "Deodoro da Fonseca", "Tancredo Neves"],
    resposta: 2
  },
  {
    pergunta: "Qual é o segundo maior continente do mundo?",
    opcoes: ["África", "América do Sul", "Europa", "América do Norte"],
    resposta: 0
  },
  {
    pergunta: "Quem pintou o teto da Capela Sistina, no Vaticano?",
    opcoes: ["Leonardo da Vinci", "Raphael", "Michelangelo", "Donatello"],
    resposta: 2
  },{
    pergunta: "Quem pintou o quadro 'Guernica'?",
    opcoes: ["Salvador Dalí", "Pablo Picasso", "Vincent van Gogh", "Claude Monet"],
    resposta: 1
  },{
    pergunta: "Em que ano ocorreu a Revolução Francesa?",
    opcoes: ["1776", "1789", "1822", "1917"],
    resposta: 1
  }
];

function exibirPergunta() {
  perguntaElemento.textContent = perguntas[perguntaAtual].pergunta;
  opcoesElemento.forEach((opcao, index) => {
    const numero = opcao.querySelector('.opcoes-generica-numero');
    const texto = opcao.querySelector('.opcoes-generica-escrita');
    numero.textContent = index + 1;
    texto.textContent = perguntas[perguntaAtual].opcoes[index];
  });
}

opcoesElemento.forEach((opcao, index) => {
  opcao.addEventListener('click', () => {
    if (index === perguntas[perguntaAtual].resposta) {
      atualizarPremios()
      modalCertaElemento.style.display = 'flex';
      
    } else {
      atualizarPremios()
      modalErradaElemento.style.display = 'flex';
    }
  });
});

function atualizarPremios() {
  const perguntaAtualJSON = premios.find((item) => item.Pergunta === perguntaAtual + 1);

  const premiosElemento = document.querySelectorAll('.premios div');

  if (perguntaAtualJSON) {
    document.getElementById('pontuacao-errar').textContent = perguntaAtualJSON.Errar;
    document.getElementById('pontuacao-parar').textContent = perguntaAtualJSON.Parar;
    document.getElementById('pontuacao-acertar').textContent = perguntaAtualJSON.Acertar;
  } else {
    document.getElementById('pontuacao-errar').textContent = 'Erro ao carregar prêmio';
    document.getElementById('pontuacao-parar').textContent = 'Erro ao carregar prêmio';
    document.getElementById('pontuacao-acertar').textContent = 'Erro ao carregar prêmio';
  }

  if (perguntaAtual < 5) {
    pontuacao += 1;
  } else if (perguntaAtual >= 5 && perguntaAtual < 10) {
    pontuacao += 10;
  } else if (perguntaAtual >= 10 && perguntaAtual < 14) {
    pontuacao += 100;
  } else if (perguntaAtual === 15) {
    pontuacao = 100000;
  }
}

stopElemento.addEventListener('click', () => {
  modalParabensElemento.style.display = 'flex';
  const premioFinalElemento = document.querySelector('#modalParabens p:nth-of-type(2)');
  premioFinalElemento.textContent = `Seu prêmio é de ${pontuacao} mil`;
  jogoAtivo = false;
});

continueElemento.addEventListener('click', () => {
  modalCertaElemento.style.display = 'none';
  modalErradaElemento.style.display = 'none';

  if (perguntaAtual < 15) {
    perguntaAtual++;
    exibirPergunta();
  } else {
    modalParabensElemento.style.display = 'flex';
    const premioFinalElemento = document.querySelector('#modalParabens p:nth-of-type(2)');
    premioFinalElemento.textContent = `Seu prêmio é de 1 milhão`;
    jogoAtivo = false;
  }
});

exibirPergunta();
