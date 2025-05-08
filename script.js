/// Functions para deixar a tela cheia
function entrarEmTelaCheia() {
  let elem = document.documentElement;
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) { // Firefox
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) { // Chrome, Safari e Opera
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { // IE/Edge
    elem.msRequestFullscreen();
  }
}


/// Clique do botao da tela de descanso
document.addEventListener("DOMContentLoaded", function () {
  const btnIniciar = document.getElementById("btnIniciarNavegacao");
  const telaDescanso = document.getElementById("tela-descanso");
  const telaMenu = document.getElementById("menu");

  btnIniciar.addEventListener("click", () => {
    entrarEmTelaCheia()
    // Oculta a tela de descanso
    telaDescanso.style.display = "none";

    // Remove e reaplica a animação para garantir que funcione
    telaMenu.classList.remove("fade-in");
    void telaMenu.offsetWidth; // força reflow
    telaMenu.classList.add("fade-in");

    // Mostra o menu
    telaMenu.style.display = "block";
  });
});

// Animação dos botoes entrando
document.addEventListener("DOMContentLoaded", function () {
  const btnIniciar = document.getElementById("btnIniciarNavegacao");
  const telaDescanso = document.getElementById("tela-descanso");
  const telaMenu = document.getElementById("menu");

  const botoes = [
    document.getElementById("botaoProjeto"),
    document.getElementById("botaoGaleria"),
    document.getElementById("botaoLocalizacao"),
    document.getElementById("botaoFilme")
  ];

  btnIniciar.addEventListener("click", () => {
    telaDescanso.style.display = "none";

    telaMenu.classList.remove("fade-in");
    void telaMenu.offsetWidth;
    telaMenu.classList.add("fade-in");
    telaMenu.style.display = "block";

    // Aplica animação de descida
    botoes.forEach((botao) => {
      botao.classList.add("botao-animado");
    });
  });
});

// Clique botao Projeto
document.getElementById('botaoProjeto').addEventListener('click', () => {
  indiceImplantacao = 0;
  atualizarImplantacao();

  const implantacao = document.getElementById('tela-implantacao');
  implantacao.classList.remove('fade-in');
  void implantacao.offsetWidth;
  implantacao.classList.add('fade-in');

  document.getElementById('tela-descanso').style.display = 'none';
  document.getElementById('menu').style.display = 'none';
  document.getElementById('tela-implantacao').style.display = 'block';
});

// Clique botao Galeria
document.getElementById('botaoGaleria').addEventListener('click', () => {

  indexGaleria = 0;
  carregarImagemInicial()
  
  const galeria = document.getElementById('tela-galeria');
  galeria.classList.remove('fade-in');
  void galeria.offsetWidth;
  galeria.classList.add('fade-in');

  document.getElementById('tela-descanso').style.display = 'none';
  document.getElementById('menu').style.display = 'none';
  document.getElementById('tela-galeria').style.display = 'block';
});

// Clique Botão Localizacao
document.getElementById('botaoLocalizacao').addEventListener('click', () => {
  
  const fotoArea = document.getElementById('tela-foto-area');
  fotoArea.classList.remove('fade-in');
  void fotoArea.offsetWidth;
  fotoArea.classList.add('fade-in');

  document.getElementById('tela-descanso').style.display = 'none';
  document.getElementById('menu').style.display = 'none';
  document.getElementById('tela-foto-area').style.display = 'block';
});

// Clique Botao Filme
document.getElementById('botaoFilme').addEventListener('click', () => {
  
  const filme = document.getElementById('tela-filme');
  filme.classList.remove('fade-in');
  void filme.offsetWidth;
  filme.classList.add('fade-in');

  document.getElementById('tela-descanso').style.display = 'none';
  document.getElementById('menu').style.display = 'none';
  document.getElementById('tela-filme').style.display = 'block';
});

// btnFecharGaleria
document.getElementById('btnFecharGaleria').addEventListener('click', function () {
  // Oculta a tela de implantação
  document.getElementById('tela-galeria').style.display = 'none';

  // Mostra o menu novamente
  document.getElementById('menu').style.display = 'block';
});

// btnFecharImplantacao
document.getElementById('btnFecharImplantacao').addEventListener('click', function () {
  // Oculta a tela de implantação
  document.getElementById('tela-implantacao').style.display = 'none';

  // Mostra o menu novamente
  document.getElementById('menu').style.display = 'block';
});

// btnFecharUnidades
document.getElementById('btnFecharUnidades').addEventListener('click', function () {
  // Oculta a tela de implantação
  document.getElementById('tela-unidades').style.display = 'none';

  // Mostra o menu novamente
  document.getElementById('menu').style.display = 'block';
});

// btnFecharDiferenciais
document.getElementById('btnFecharDiferenciais').addEventListener('click', function () {
  // Oculta a tela de implantação
  document.getElementById('tela-diferenciais').style.display = 'none';

  // Mostra o menu novamente
  document.getElementById('menu').style.display = 'block';
});

// btnFecharFichaTecnica
document.getElementById('btnFecharFichaTecnica').addEventListener('click', function () {
  // Oculta a tela de implantação
  document.getElementById('tela-ficha-tecnica').style.display = 'none';

  // Mostra o menu novamente
  document.getElementById('menu').style.display = 'block';
});

// btnFecharFotoArea
document.getElementById('btnFecharFotoArea').addEventListener('click', function () {
  // Oculta a tela de implantação
  document.getElementById('tela-foto-area').style.display = 'none';

  // Mostra o menu novamente
  document.getElementById('menu').style.display = 'block';
});

// btnFecharPontos
document.getElementById('btnFecharPontos').addEventListener('click', function () {
  // Oculta a tela de implantação
  document.getElementById('tela-pontos').style.display = 'none';

  // Mostra o menu novamente
  document.getElementById('menu').style.display = 'block';
});

// btnFecharFilme
document.getElementById('btnFecharFilme').addEventListener('click', function () {
  // Oculta a tela de implantação
  document.getElementById('tela-filme').style.display = 'none';

  // Mostra o menu novamente
  document.getElementById('menu').style.display = 'block';
});

// Mudança de imagens da implantacao
const fundos = [
  'images/tela-implantacao/setor-01-fundo.png',
  'images/tela-implantacao/01-pavimento-fundo.png',
  'images/tela-implantacao/coberturas-fundo.png'
];

const faixas = [
  'images/tela-implantacao/setor-01.png',
  'images/tela-implantacao/01-pavimento.png',
  'images/tela-implantacao/coberturas.png'
];

let indiceImplantacao = 0;

// Atualiza as imagens de fundo e faixa
function atualizarImplantacao() {
  document.getElementById('fundoImplantacao').src = fundos[indiceImplantacao];
  document.getElementById('faixaImplantacao').src = faixas[indiceImplantacao];
}

// Navegação com seta direita
document.getElementById('setaDireita').addEventListener('click', () => {
  indiceImplantacao = (indiceImplantacao + 1) % fundos.length;
  atualizarImplantacao();
});

// Navegação com seta esquerda
document.getElementById('setaEsquerda').addEventListener('click', () => {
  indiceImplantacao = (indiceImplantacao - 1 + fundos.length) % fundos.length;
  atualizarImplantacao();
});

// Funcoes para os botoes do projeto
document.addEventListener('DOMContentLoaded', () => {
  // Botoes implantacao
  document.getElementById('btnUnidadesImplantacao').addEventListener('click', irParaTelaUnidades);
  document.getElementById('btnDiferenciaisImplantacao').addEventListener('click', irParaTelaDiferenciais);
  document.getElementById('btnFichaTecnicaImplantacao').addEventListener('click', irParaTelaFichaTecnica);

  // Botoes unidades
  document.getElementById('btnImplantacaoUnidades').addEventListener('click', irParaTelaImplantacao);
  document.getElementById('btnDiferenciaisUnidades').addEventListener('click', irParaTelaDiferenciais);
  document.getElementById('btnFichaTecnicaUnidades').addEventListener('click', irParaTelaFichaTecnica);

  // Botoes diferenciais
  document.getElementById('btnImplantacaoDiferenciais').addEventListener('click', irParaTelaImplantacao);
  document.getElementById('btnUnidadesDiferenciais').addEventListener('click', irParaTelaUnidades);
  document.getElementById('btnFichaTecnicaDiferenciais').addEventListener('click', irParaTelaFichaTecnica);

  // Botoes ficha tecnica
  document.getElementById('btnImplantacaoFichaTecnica').addEventListener('click', irParaTelaImplantacao);
  document.getElementById('btnUnidadesFichaTecnica').addEventListener('click', irParaTelaUnidades);
  document.getElementById('btnDiferenciaisFichaTecnica').addEventListener('click', irParaTelaDiferenciais);
});


function irParaTelaImplantacao() {
  // Garante que a imagem inicial seja exibida
  indiceImplantacao = 0;
  atualizarImplantacao();

  // Oculta todas as outras seções
  document.getElementById('tela-descanso').style.display = 'none';
  document.getElementById('tela-unidades').style.display = 'none';
  document.getElementById('tela-diferenciais').style.display = 'none';
  document.getElementById('tela-ficha-tecnica').style.display = 'none';
  document.getElementById('menu').style.display = 'none';

  // Reinicia a animação da tela de Implantação
  const telaImplantacao = document.getElementById('tela-implantacao');
  telaImplantacao.classList.remove('fade-in');
  void telaImplantacao.offsetWidth; // força reflow
  telaImplantacao.classList.add('fade-in');

  // Exibe a tela
  telaImplantacao.style.display = 'block';
}

function irParaTelaUnidades() {
  indiceUnidades = 0; // Reseta para a primeira imagem
  atualizarUnidades();
  // Oculta outras telas
  document.getElementById('tela-implantacao').style.display = 'none';
  document.getElementById('tela-diferenciais').style.display = 'none';
  document.getElementById('menu').style.display = 'none';
  document.getElementById('tela-descanso').style.display = 'none';
  document.getElementById('tela-ficha-tecnica').style.display = 'none';

  // Reinicia a animação da tela de Unidades
  const telaUnidades = document.getElementById('tela-unidades');
  telaUnidades.classList.remove('fade-in');
  void telaUnidades.offsetWidth; // força reflow
  telaUnidades.classList.add('fade-in');

  // Exibe a tela
  telaUnidades.style.display = 'block';
}

function irParaTelaDiferenciais () {
  // Oculta outras telas
  document.getElementById('tela-implantacao').style.display = 'none';
  document.getElementById('tela-unidades').style.display = 'none';
  document.getElementById('menu').style.display = 'none';
  document.getElementById('tela-descanso').style.display = 'none';
  document.getElementById('tela-ficha-tecnica').style.display = 'none';

  // Reinicia a animação da tela de Diferenciais
  const telaDiferenciais = document.getElementById('tela-diferenciais');
  telaDiferenciais.classList.remove('fade-in');
  void telaDiferenciais.offsetWidth; // força reflow
  telaDiferenciais.classList.add('fade-in');

  // Exibe a tela
  telaDiferenciais.style.display = 'block';
}

function irParaTelaFichaTecnica () {
    // Oculta outras telas
    document.getElementById('tela-implantacao').style.display = 'none';
    document.getElementById('tela-unidades').style.display = 'none';
    document.getElementById('tela-diferenciais').style.display = 'none';
    document.getElementById('menu').style.display = 'none';
    document.getElementById('tela-descanso').style.display = 'none';
  
    // Reinicia a animação da tela de Diferenciais
    const telaFichaTecnica = document.getElementById('tela-ficha-tecnica');
    telaFichaTecnica.classList.remove('fade-in');
    void telaFichaTecnica.offsetWidth; // força reflow
    telaFichaTecnica.classList.add('fade-in');
  
    // Exibe a tela
    telaFichaTecnica.style.display = 'block';
}

// Mudança de imagens da unidades
const fundosUnidades = [
  'images/tela-unidades/fundo-01.png',
  'images/tela-unidades/fundo-02.png',
  'images/tela-unidades/fundo-03.png',
  'images/tela-unidades/fundo-04.png',
  'images/tela-unidades/fundo-05.png',
  'images/tela-unidades/fundo-06.png',
];

let indiceUnidades = 0;

// Atualiza as imagens de fundo e faixa
function atualizarUnidades() {
  document.getElementById('fundoUnidades').src = fundosUnidades[indiceUnidades];
}

// Navegação com seta direita
document.getElementById('setaDireitaUnidades').addEventListener('click', () => {
  indiceUnidades = (indiceUnidades + 1) % fundosUnidades.length;
  atualizarUnidades();
});

// Navegação com seta esquerda
document.getElementById('setaEsquerdaUnidades').addEventListener('click', () => {
  indiceUnidades = (indiceUnidades - 1 + fundosUnidades.length) % fundosUnidades.length;
  atualizarUnidades();
});

// Pop up da galeria
const nomesDasImagens = [
  "beach-lounge.png",

];

let indexGaleria = 0;

// Elementos
const imagemPrincipal = document.getElementById("fotoGaleria");
const imagemZoom = document.querySelector(".imagem-zoom");
const btnPrev = document.getElementById("setaEsquerdaGaleria");
const btnNext = document.getElementById("setaDireitaGaleria");
const popupZoom = document.getElementById("popupZoom");
const popupOverlay = document.querySelector(".popup-overlay");
const popupContent = document.querySelector(".popup-content");

// Gera o caminho da imagem do popup a partir do nome base
function gerarNomePopup(nomeOriginal) {
  return nomeOriginal.replace(".png", ".jpg");
}

// Trocar imagem
function trocarImagem(direcao) {
  imagemPrincipal.style.opacity = 0;
  imagemPrincipal.style.transition = "opacity 0.2s ease";

  setTimeout(() => {
    if (direcao === "next") {
      indexGaleria = (indexGaleria + 1) % nomesDasImagens.length;
    } else {
      indexGaleria = (indexGaleria - 1 + nomesDasImagens.length) % nomesDasImagens.length;
    }

    const nome = nomesDasImagens[indexGaleria];
    imagemPrincipal.src = `images/tela-galeria/normal/${nome}`;
    imagemZoom.src = `images/tela-galeria/aberta/${gerarNomePopup(nome)}`;

    imagemPrincipal.onload = () => {
      imagemPrincipal.style.opacity = 1;
    };
  }, 200);
}

// Botões
btnNext.addEventListener("click", () => trocarImagem("next"));
btnPrev.addEventListener("click", () => trocarImagem("prev"));

// Imagem inicial
function carregarImagemInicial() {
  const nome = nomesDasImagens[indexGaleria];
  imagemPrincipal.src = `images/tela-galeria/normal/${nome}`;
  imagemZoom.src = `images/tela-galeria/aberta/${gerarNomePopup(nome)}`;
}
carregarImagemInicial();

// Abrir popup
imagemPrincipal.addEventListener("click", () => {
  const nome = nomesDasImagens[indexGaleria];
  const timestamp = Date.now(); // Evita cache
  imagemZoom.src = `images/tela-galeria/aberta/${gerarNomePopup(nome)}?v=${timestamp}`;
  popupZoom.style.display = "flex";
  setTimeout(() => {
    popupOverlay.style.opacity = 1;
  }, 10);
});

// Fechar popup clicando fora
popupOverlay.addEventListener("click", (event) => {
  if (!popupContent.contains(event.target)) {
    fecharPopup();
  }
});

function fecharPopup() {
  popupOverlay.style.opacity = 0;
  setTimeout(() => {
    popupZoom.style.display = "none";
  }, 500);
}

// Funcoes para os botoes do projeto
document.addEventListener('DOMContentLoaded', () => {
  // Botoes Foto Area
  document.getElementById('btnPontosFotoArea').addEventListener('click', irParaTelaPontos);

  // Botoes Pontos
  document.getElementById('btnFotoAreaPontos').addEventListener('click', irParaTelaFotoArea);
});

// Funções Tela Localização
function irParaTelaFotoArea() {
    // Oculta outras telas

    document.getElementById('menu').style.display = 'none';
    document.getElementById('tela-pontos').style.display = 'none';
  
    // Reinicia a animação da tela de Foto Area
    const telaFotoArea = document.getElementById('tela-foto-area');
    telaFotoArea.classList.remove('fade-in');
    void telaFotoArea.offsetWidth; // força reflow
    telaFotoArea.classList.add('fade-in');
  
    // Exibe a tela
    telaFotoArea.style.display = 'block';
}

function irParaTelaPontos() {

    // Oculta outras telas
    document.getElementById('menu').style.display = 'none';
    document.getElementById('tela-foto-area').style.display = 'none';
  
    // Reinicia a animação da tela de Foto Area
    const telaPontos = document.getElementById('tela-pontos');
    telaPontos.classList.remove('fade-in');
    void telaPontos.offsetWidth; // força reflow
    telaPontos.classList.add('fade-in');
  
    // Exibe a tela
    telaPontos.style.display = 'block';
}