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

      botao.addEventListener("animationend", () => {
        botao.classList.remove("botao-animado");
        botao.classList.add("botao-pulsando"); // segunda animação
      }, { once: true }); // garante que só roda uma vez
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

function irParaTelaDiferenciais() {
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

function irParaTelaFichaTecnica() {
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
  "boulevard.png",               // 03 - Boulevard
  "piscina-coberta.png",         // 05 - Piscina Aquecida Coberta
  "quadra.png",                  // 06 - Quadra Poliesportiva
  "academia.png",                // 08 - Fitness
  "mercado.png",                 // 09 - Mini Mercado
  "hall.png",                    // 10 - Hall
  "lockers.png",                 // 11 - Lockers
  "auditorio.png",               // 12 - Auditório
  "lounge.png",                  // 13 - Lounge
  "festas.png",         // 14 - Salão de Festas
  "brinquedoteca.png",           // 01 - Brinquedoteca (2º bolotário)
  "sala-de-reuniao.png",         // 03 - Cabine de Reunião
  "lavanderia.png",              // 04 - Lavanderia
  "coworking.png",               // 05 - Coworking
  "churrasqueira.png",           // 01/02 - Churrasqueiras

  // Os que não estão no bolotário (extra)
  "beach-lounge.png",
  "beach-tennis.png",
  "entrada.png",
  "fachada.png",
  "fachada-02.png",
  "fachada-03.png",
  "fachada-04.png",
  "festas.png",
  "gourmet.png",
  "painel-solar.png",
  "paisagismo.png",
  "pergolado.png",
  "pet-place.png",
  "piscina.png",
  "prainha.png",
  "multiplay.png",
  "living-bloco-01.png",
  "living-bloco-02.png",
  "living-setor-01.png",
  "living-setor-01-b.png",
  "living-setor-02.png",
  "living-setor-03.png",
  "voo.png",
  "voo-02.png"
];

let indexGaleria = 0;

// Elementos
const imagemPrincipal = document.getElementById("fotoGaleria");
const imagemZoom = document.querySelector(".imagem-zoom");
const btnPrev = document.getElementById("setaEsquerdaGaleria");
const btnNext = document.getElementById("setaDireitaGaleria");
const popupZoom = document.getElementById("popupZoom");
const popupOverlay = document.querySelector("#popupZoom .popup-overlay");
const popupContent = document.querySelector("#popupZoom .popup-content");

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

// ========== SWIPE NA GALERIA ==========

let startX = 0;
let currentX = 0;
let isDragging = false;
let wasDragged = false;

function startDrag(x) {
  startX = x;
  currentX = x;
  isDragging = true;
  wasDragged = false;
  imagemPrincipal.style.transition = 'none';
}

function drag(x) {
  if (!isDragging) return;
  wasDragged = true;
  currentX = x;
  const diff = currentX - startX;
  imagemPrincipal.style.transform = `translateX(${diff}px)`;
}

function endDrag() {
  if (!isDragging) return;
  isDragging = false;

  const diff = currentX - startX;
  imagemPrincipal.style.transition = 'transform 0.3s ease';
  imagemPrincipal.style.transform = 'translateX(0)';

  if (Math.abs(diff) > 50) {
    if (diff < 0) {
      trocarImagem("next");
    } else {
      trocarImagem("prev");
    }
  }

  // Reset
  startX = 0;
  currentX = 0;
}

// TOUCH EVENTS
imagemPrincipal.addEventListener("touchstart", (e) => {
  startDrag(e.touches[0].clientX);
}, { passive: false });

imagemPrincipal.addEventListener("touchmove", (e) => {
  drag(e.touches[0].clientX);
}, { passive: false });

imagemPrincipal.addEventListener("touchend", () => {
  endDrag();
});

// MOUSE EVENTS
imagemPrincipal.addEventListener("mousedown", (e) => {
  e.preventDefault();
  startDrag(e.clientX);

  const onMouseMove = (e) => drag(e.clientX);
  const onMouseUp = () => {
    endDrag();
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseup", onMouseUp);
  };

  document.addEventListener("mousemove", onMouseMove);
  document.addEventListener("mouseup", onMouseUp);
});


// Abrir popup
imagemPrincipal.addEventListener("click", () => {
  if (wasDragged) {
    wasDragged = false; // reseta após o swipe
    return; // cancela o clique se foi arrasto
  }

  const nome = nomesDasImagens[indexGaleria];
  imagemZoom.src = `images/tela-galeria/aberta/${gerarNomePopup(nome)}`;
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

const fundoImplantacao = document.getElementById('fundoImplantacao');
const popupImplantacao = document.getElementById('popupImplantacao');
const imagemZoomImplantacao = document.getElementById('imagemZoomImplantacao');

fundoImplantacao.addEventListener('click', () => {
  // Extrai apenas o nome do arquivo original
  const srcOriginal = fundoImplantacao.src;
  const nomeArquivo = srcOriginal.split('/').pop(); // ex: setor-01-fundo.png

  // Remove o sufixo '-fundo' do nome e troca de pasta
  const nomeZoom = nomeArquivo.replace('-fundo', '');
  const novoCaminho = `images/tela-implantacao/zoom/${nomeZoom}`;

  // Atualiza e exibe o popup
  imagemZoomImplantacao.src = novoCaminho;
  popupImplantacao.style.display = 'flex';
  setTimeout(() => {
    popupImplantacao.style.opacity = 1;
  }, 10);
});

// Fecha ao clicar fora da imagem
popupImplantacao.addEventListener('click', (e) => {
  if (!imagemZoomImplantacao.contains(e.target)) {
    popupImplantacao.style.opacity = 0;
    setTimeout(() => {
      popupImplantacao.style.display = 'none';
    }, 300);
  }
});

const fundoUnidades = document.getElementById('fundoUnidades');
const popupUnidades = document.getElementById('popupUnidades');
const imagemZoomUnidades = document.getElementById('imagemZoomUnidades');

fundoUnidades.addEventListener('click', () => {
  // Extrai apenas o nome da imagem original
  const srcOriginal = fundoUnidades.src;
  const nomeArquivo = srcOriginal.split('/').pop(); // ex: fundo-01.png

  // Constrói o novo caminho para a pasta zoom
  const novoCaminho = `images/tela-unidades/zoom/${nomeArquivo}`;

  imagemZoomUnidades.src = novoCaminho;
  popupUnidades.style.display = 'flex';

  setTimeout(() => {
    popupUnidades.style.opacity = 1;
  }, 10);
});

// Fechar popup clicando fora da imagem
popupUnidades.addEventListener('click', (e) => {
  if (!imagemZoomUnidades.contains(e.target)) {
    popupUnidades.style.opacity = 0;
    setTimeout(() => {
      popupUnidades.style.display = 'none';
    }, 300);
  }
});

const popupDiferenciais = document.getElementById("popupDiferenciais");
const imagemZoomDiferenciais = document.getElementById("imagemZoomDiferenciais");
const videoZoomDiferenciais = document.getElementById("videoZoomDiferenciais");

// Itens do grid (menos os dois últimos)
const itensDiferenciais = document.querySelectorAll('.grid-diferenciais .item-diferencial');

itensDiferenciais.forEach((item) => {
  item.addEventListener("click", () => {
    const imagem = item.querySelector("img");
    const src = imagem.getAttribute("src");

    if (
      src.includes("area-verde-privada.png") ||
      src.includes("ponto-recarga-carros.png")
    ) {
      return; // Ignora o clique nesses dois
    }

    const nomeBase = src.split("/").pop().replace(".png", "");

    const caminhos = [
      `images/tela-diferenciais/zoom/${nomeBase}.mp4`,
      `images/tela-diferenciais/zoom/${nomeBase}.jpg`,
      `images/tela-diferenciais/zoom/${nomeBase}.png`,
    ];

    imagemZoomDiferenciais.style.display = "none";
    videoZoomDiferenciais.style.display = "none";

    verificarExistenciaDeArquivo(caminhos)
      .then((caminhoValido) => {
        if (caminhoValido.endsWith(".mp4")) {
          videoZoomDiferenciais.src = caminhoValido;
          videoZoomDiferenciais.style.display = "block";
          videoZoomDiferenciais.load();
        } else {
          imagemZoomDiferenciais.src = caminhoValido;
          imagemZoomDiferenciais.style.display = "block";
        }

        popupDiferenciais.style.display = "flex";
        setTimeout(() => {
          popupDiferenciais.style.opacity = 1;
        }, 10);
      })
      .catch(() => {
        console.warn("Arquivo não encontrado para:", nomeBase);
      });
  });
});


// Fecha ao clicar fora
popupDiferenciais.addEventListener("click", (e) => {
  if (!popupDiferenciais.querySelector(".popup-content").contains(e.target)) {
    popupDiferenciais.style.opacity = 0;
    videoZoomDiferenciais.pause();
    setTimeout(() => {
      popupDiferenciais.style.display = "none";
    }, 300);
  }
});

// Função auxiliar para checar qual caminho existe
function verificarExistenciaDeArquivo(caminhos) {
  return new Promise((resolve, reject) => {
    let i = 0;

    function tentarProximo() {
      if (i >= caminhos.length) return reject();

      const caminho = caminhos[i];
      const xhr = new XMLHttpRequest();
      xhr.open('HEAD', caminho, true);
      xhr.onload = () => {
        if (xhr.status === 200) {
          resolve(caminho);
        } else {
          i++;
          tentarProximo();
        }
      };
      xhr.onerror = () => {
        i++;
        tentarProximo();
      };
      xhr.send();
    }

    tentarProximo();
  });
}
