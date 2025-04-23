//FUNÇÃO DE PESQUISA--------------------------------------------------------------------------------------

function pesquisar() {
  const input = document.getElementById("nav-form__input").value;
  const resposta = document.getElementById("div-resposta");

  if (!input) {
    resposta.innerHTML = `
        <div class="resposta-vazia">
            <p class="erro">Por favor, digite um termo de pesquisa.</p>
        </div>
    `;
  } else {
    resposta.innerHTML = `
        <div class="resposta">
        <p>Você buscou por: '${input}'</p>
        </div>
    `;
  }

  document.body.appendChild(resposta);
}

// FUNÇÃO DE MENU CATEGORIAS --------------------------------------------------------------------------------------

const todasCategoriasBtn = document.getElementById("todasCategorias");
const menuCategorias = document.getElementById("menu-categorias");
const departamentos = document.querySelectorAll(".departamento");
const categoriasContainer = document.querySelector(".categorias-container");
const categoriasExibidas = document.getElementById("categorias-exibidas");
const departamentosNavegacao = document.querySelectorAll(".li-departamento");

// Função para abrir o menu
function abrirMenuCategorias() {
  menuCategorias.classList.add("mostrar");
  categoriasExibidas.classList.remove("mostrar");
  categoriasExibidas.innerHTML = "";
}

// Função para fechar o menu
function fecharMenuCategorias() {
  menuCategorias.classList.remove("mostrar");
  categoriasContainer.innerHTML = "";
}

// Evento de mouseenter para abrir o menu
todasCategoriasBtn.addEventListener("mouseenter", abrirMenuCategorias);

// Evento de mouseleave para fechar o menu quando o mouse sai do botão e do menu
menuCategorias.addEventListener("mouseleave", function (event) {
  // Verifica se o mouse está fora do botão, do menu e do container de categorias
  if (
    !todasCategoriasBtn.contains(event.relatedTarget) &&
    !menuCategorias.contains(event.relatedTarget) &&
    !categoriasContainer.contains(event.relatedTarget)
  ) {
    fecharMenuCategorias();
  }
});

todasCategoriasBtn.addEventListener("mouseleave", function (event) {
  // Verifica se o mouse está fora do botão, do menu e do container de categorias
  if (
    !todasCategoriasBtn.contains(event.relatedTarget) &&
    !menuCategorias.contains(event.relatedTarget) &&
    !categoriasContainer.contains(event.relatedTarget)
  ) {
    fecharMenuCategorias();
  }
});

categoriasContainer.addEventListener("mouseleave", function (event) {
  // Verifica se o mouse está fora do botão, do menu e do container de categorias
  if (
    !todasCategoriasBtn.contains(event.relatedTarget) &&
    !menuCategorias.contains(event.relatedTarget) &&
    !categoriasContainer.contains(event.relatedTarget)
  ) {
    fecharMenuCategorias();
  }
});

departamentos.forEach((departamento) => {
  departamento.addEventListener("mouseenter", function () {
    const departamentoId = this.dataset.departamento;
    exibirCategorias(departamentoId);
  });
});

departamentosNavegacao.forEach((departamentoNavegacao) => {
  departamentoNavegacao.addEventListener("mouseenter", function () {
    const departamentoId = this.dataset.departamento;
    exibirCategoriasNavegacao(departamentoId);

    // Remove a classe 'active' de todos os departamentos
    departamentosNavegacao.forEach((item) => {
      item.classList.remove("active");
    });

    // Adiciona a classe 'active' ao departamento clicado
    this.classList.add("active");
  });
});

function exibirCategorias(departamentoId) {
  // Simulação de dados de categorias (substitua com seus dados reais)
  const categorias = {
    1: [
      { nome: "Categoria 1.1", link: "#" },
      { nome: "Categoria 1.2", link: "#" },
      { nome: "Categoria 1.3", link: "#" },
      { nome: "Categoria 1.4", link: "#" },
      { nome: "Categoria 1.5", link: "#" },
      { nome: "Categoria 1.6", link: "#" },
      { nome: "Categoria 1.7", link: "#" },
      { nome: "Categoria 1.8", link: "#" },
      { nome: "Categoria 1.9", link: "#" },
      { nome: "Categoria 1.10", link: "#" },
      { nome: "Categoria 1.11", link: "#" },
      { nome: "Categoria 1.12", link: "#" },
      { nome: "Categoria 1.13", link: "#" },
      { nome: "Categoria 1.14", link: "#" },
      { nome: "Categoria 1.15", link: "#" },
      { nome: "Categoria 1.16", link: "#" },
      { nome: "Categoria 1.17", link: "#" },
      { nome: "Categoria 1.18", link: "#" },
      { nome: "Categoria 1.19", link: "#" },
      { nome: "Categoria 1.20", link: "#" },
      { nome: "Categoria 1.21", link: "#" },
      { nome: "Categoria 1.22", link: "#" },
      { nome: "Categoria 1.23", link: "#" },
      { nome: "Categoria 1.24", link: "#" },
    ],

    2: [
      { nome: "Categoria 2.1", link: "#" },
      { nome: "Categoria 2.2", link: "#" },
      { nome: "Categoria 2.3", link: "#" },
      { nome: "Categoria 2.4", link: "#" },
      { nome: "Categoria 2.5", link: "#" },
      { nome: "Categoria 2.6", link: "#" },
      { nome: "Categoria 2.7", link: "#" },
      { nome: "Categoria 2.8", link: "#" },
      { nome: "Categoria 2.9", link: "#" },
      { nome: "Categoria 2.10", link: "#" },
      { nome: "Categoria 2.11", link: "#" },
      { nome: "Categoria 2.12", link: "#" },
      { nome: "Categoria 2.13", link: "#" },
      { nome: "Categoria 2.14", link: "#" },
      { nome: "Categoria 2.15", link: "#" },
      { nome: "Categoria 2.16", link: "#" },
      { nome: "Categoria 2.17", link: "#" },
      { nome: "Categoria 2.18", link: "#" },
      { nome: "Categoria 2.19", link: "#" },
      { nome: "Categoria 2.20", link: "#" },
      { nome: "Categoria 2.21", link: "#" },
      { nome: "Categoria 2.22", link: "#" },
      { nome: "Categoria 2.23", link: "#" },
      { nome: "Categoria 2.24", link: "#" },
    ],

    3: [
      { nome: "Categoria 3.1", link: "#" },
      { nome: "Categoria 3.2", link: "#" },
      { nome: "Categoria 3.3", link: "#" },
      { nome: "Categoria 3.4", link: "#" },
      { nome: "Categoria 3.5", link: "#" },
      { nome: "Categoria 3.6", link: "#" },
      { nome: "Categoria 3.7", link: "#" },
      { nome: "Categoria 3.8", link: "#" },
      { nome: "Categoria 3.9", link: "#" },
      { nome: "Categoria 3.10", link: "#" },
      { nome: "Categoria 3.11", link: "#" },
      { nome: "Categoria 3.12", link: "#" },
      { nome: "Categoria 3.13", link: "#" },
      { nome: "Categoria 3.14", link: "#" },
      { nome: "Categoria 3.15", link: "#" },
      { nome: "Categoria 3.16", link: "#" },
      { nome: "Categoria 3.17", link: "#" },
      { nome: "Categoria 3.18", link: "#" },
      { nome: "Categoria 3.19", link: "#" },
      { nome: "Categoria 3.20", link: "#" },
      { nome: "Categoria 3.21", link: "#" },
      { nome: "Categoria 3.22", link: "#" },
      { nome: "Categoria 3.23", link: "#" },
      { nome: "Categoria 3.24", link: "#" },
    ],

    4: [
      { nome: "Categoria 4.1", link: "#" },
      { nome: "Categoria 4.2", link: "#" },
      { nome: "Categoria 4.3", link: "#" },
      { nome: "Categoria 4.4", link: "#" },
      { nome: "Categoria 4.5", link: "#" },
      { nome: "Categoria 4.6", link: "#" },
      { nome: "Categoria 4.7", link: "#" },
      { nome: "Categoria 4.8", link: "#" },
      { nome: "Categoria 4.9", link: "#" },
      { nome: "Categoria 4.10", link: "#" },
      { nome: "Categoria 4.11", link: "#" },
      { nome: "Categoria 4.12", link: "#" },
      { nome: "Categoria 4.13", link: "#" },
      { nome: "Categoria 4.14", link: "#" },
      { nome: "Categoria 4.15", link: "#" },
      { nome: "Categoria 4.16", link: "#" },
      { nome: "Categoria 4.17", link: "#" },
      { nome: "Categoria 4.18", link: "#" },
      { nome: "Categoria 4.19", link: "#" },
      { nome: "Categoria 4.20", link: "#" },
      { nome: "Categoria 4.21", link: "#" },
      { nome: "Categoria 4.22", link: "#" },
      { nome: "Categoria 4.23", link: "#" },
      { nome: "Categoria 4.24", link: "#" },
    ],

    5: [
      { nome: "Categoria 5.1", link: "#" },
      { nome: "Categoria 5.2", link: "#" },
      { nome: "Categoria 5.3", link: "#" },
      { nome: "Categoria 5.4", link: "#" },
      { nome: "Categoria 5.5", link: "#" },
      { nome: "Categoria 5.6", link: "#" },
      { nome: "Categoria 5.7", link: "#" },
      { nome: "Categoria 5.8", link: "#" },
      { nome: "Categoria 5.9", link: "#" },
      { nome: "Categoria 5.10", link: "#" },
      { nome: "Categoria 5.11", link: "#" },
      { nome: "Categoria 5.12", link: "#" },
      { nome: "Categoria 5.13", link: "#" },
      { nome: "Categoria 5.14", link: "#" },
      { nome: "Categoria 5.15", link: "#" },
      { nome: "Categoria 5.16", link: "#" },
      { nome: "Categoria 5.17", link: "#" },
      { nome: "Categoria 5.18", link: "#" },
      { nome: "Categoria 5.19", link: "#" },
      { nome: "Categoria 5.20", link: "#" },
      { nome: "Categoria 5.21", link: "#" },
      { nome: "Categoria 5.22", link: "#" },
      { nome: "Categoria 5.23", link: "#" },
      { nome: "Categoria 5.24", link: "#" },
    ],

    6: [
      { nome: "Categoria 6.1", link: "#" },
      { nome: "Categoria 6.2", link: "#" },
      { nome: "Categoria 6.3", link: "#" },
      { nome: "Categoria 6.4", link: "#" },
      { nome: "Categoria 6.5", link: "#" },
      { nome: "Categoria 6.6", link: "#" },
      { nome: "Categoria 6.7", link: "#" },
      { nome: "Categoria 6.8", link: "#" },
      { nome: "Categoria 6.9", link: "#" },
      { nome: "Categoria 6.10", link: "#" },
      { nome: "Categoria 6.11", link: "#" },
      { nome: "Categoria 6.12", link: "#" },
      { nome: "Categoria 6.13", link: "#" },
      { nome: "Categoria 6.14", link: "#" },
      { nome: "Categoria 6.15", link: "#" },
      { nome: "Categoria 6.16", link: "#" },
      { nome: "Categoria 6.17", link: "#" },
      { nome: "Categoria 6.18", link: "#" },
      { nome: "Categoria 6.19", link: "#" },
      { nome: "Categoria 6.20", link: "#" },
      { nome: "Categoria 6.21", link: "#" },
      { nome: "Categoria 6.22", link: "#" },
      { nome: "Categoria 6.23", link: "#" },
      { nome: "Categoria 6.24", link: "#" },
    ],

    7: [
      { nome: "Categoria 7.1", link: "#" },
      { nome: "Categoria 7.2", link: "#" },
      { nome: "Categoria 7.3", link: "#" },
      { nome: "Categoria 7.4", link: "#" },
      { nome: "Categoria 7.5", link: "#" },
      { nome: "Categoria 7.6", link: "#" },
      { nome: "Categoria 7.7", link: "#" },
      { nome: "Categoria 7.8", link: "#" },
      { nome: "Categoria 7.9", link: "#" },
      { nome: "Categoria 7.10", link: "#" },
      { nome: "Categoria 7.11", link: "#" },
      { nome: "Categoria 7.12", link: "#" },
      { nome: "Categoria 7.13", link: "#" },
      { nome: "Categoria 7.14", link: "#" },
      { nome: "Categoria 7.15", link: "#" },
      { nome: "Categoria 7.16", link: "#" },
      { nome: "Categoria 7.17", link: "#" },
      { nome: "Categoria 7.18", link: "#" },
      { nome: "Categoria 7.19", link: "#" },
      { nome: "Categoria 7.20", link: "#" },
      { nome: "Categoria 7.21", link: "#" },
      { nome: "Categoria 7.22", link: "#" },
      { nome: "Categoria 7.23", link: "#" },
      { nome: "Categoria 7.24", link: "#" },
    ],

    8: [
      { nome: "Categoria 8.1", link: "#" },
      { nome: "Categoria 8.2", link: "#" },
      { nome: "Categoria 8.3", link: "#" },
      { nome: "Categoria 8.4", link: "#" },
      { nome: "Categoria 8.5", link: "#" },
      { nome: "Categoria 8.6", link: "#" },
      { nome: "Categoria 8.7", link: "#" },
      { nome: "Categoria 8.8", link: "#" },
      { nome: "Categoria 8.9", link: "#" },
      { nome: "Categoria 8.10", link: "#" },
      { nome: "Categoria 8.11", link: "#" },
      { nome: "Categoria 8.12", link: "#" },
      { nome: "Categoria 8.13", link: "#" },
      { nome: "Categoria 8.14", link: "#" },
      { nome: "Categoria 8.15", link: "#" },
      { nome: "Categoria 8.16", link: "#" },
      { nome: "Categoria 8.17", link: "#" },
      { nome: "Categoria 8.18", link: "#" },
      { nome: "Categoria 8.19", link: "#" },
      { nome: "Categoria 8.20", link: "#" },
      { nome: "Categoria 8.21", link: "#" },
      { nome: "Categoria 8.22", link: "#" },
      { nome: "Categoria 8.23", link: "#" },
      { nome: "Categoria 8.24", link: "#" },
    ],
  };

  if (categorias[departamentoId]) {
    let categoriasHTML = '<div class="categorias-colunas">';
    for (let i = 0; i < categorias[departamentoId].length; i += 8) {
      categoriasHTML += '<ul class="coluna">';
      for (let j = i; j < i + 8 && j < categorias[departamentoId].length; j++) {
        categoriasHTML += `<li><a href="${categorias[departamentoId][j].link}">${categorias[departamentoId][j].nome}</a></li>`;
      }
      categoriasHTML += "</ul>";
    }
    categoriasHTML += "</div>";
    categoriasContainer.innerHTML = categoriasHTML;
  } else {
    categoriasContainer.innerHTML = "<p>Nenhuma categoria encontrada.</p>";
  }
}

function exibirCategoriasNavegacao(departamentoId) {
  // Simulação de dados de categorias (substitua com seus dados reais)
  const categorias = {
    1: [
      { nome: "Categoria 1.1", link: "#" },
      { nome: "Categoria 1.2", link: "#" },
      { nome: "Categoria 1.3", link: "#" },
      { nome: "Categoria 1.4", link: "#" },
      { nome: "Categoria 1.5", link: "#" },
      { nome: "Categoria 1.6", link: "#" },
      { nome: "Categoria 1.7", link: "#" },
      { nome: "Categoria 1.8", link: "#" },
      { nome: "Categoria 1.9", link: "#" },
      { nome: "Categoria 1.10", link: "#" },
      { nome: "Categoria 1.11", link: "#" },
      { nome: "Categoria 1.12", link: "#" },
      { nome: "Categoria 1.13", link: "#" },
      { nome: "Categoria 1.14", link: "#" },
      { nome: "Categoria 1.15", link: "#" },
      { nome: "Categoria 1.16", link: "#" },
      { nome: "Categoria 1.17", link: "#" },
      { nome: "Categoria 1.18", link: "#" },
      { nome: "Categoria 1.19", link: "#" },
      { nome: "Categoria 1.20", link: "#" },
      { nome: "Categoria 1.21", link: "#" },
      { nome: "Categoria 1.22", link: "#" },
      { nome: "Categoria 1.23", link: "#" },
      { nome: "Categoria 1.24", link: "#" },
    ],

    2: [
      { nome: "Categoria 2.1", link: "#" },
      { nome: "Categoria 2.2", link: "#" },
      { nome: "Categoria 2.3", link: "#" },
      { nome: "Categoria 2.4", link: "#" },
      { nome: "Categoria 2.5", link: "#" },
      { nome: "Categoria 2.6", link: "#" },
      { nome: "Categoria 2.7", link: "#" },
      { nome: "Categoria 2.8", link: "#" },
      { nome: "Categoria 2.9", link: "#" },
      { nome: "Categoria 2.10", link: "#" },
      { nome: "Categoria 2.11", link: "#" },
      { nome: "Categoria 2.12", link: "#" },
      { nome: "Categoria 2.13", link: "#" },
      { nome: "Categoria 2.14", link: "#" },
      { nome: "Categoria 2.15", link: "#" },
      { nome: "Categoria 2.16", link: "#" },
      { nome: "Categoria 2.17", link: "#" },
      { nome: "Categoria 2.18", link: "#" },
      { nome: "Categoria 2.19", link: "#" },
      { nome: "Categoria 2.20", link: "#" },
      { nome: "Categoria 2.21", link: "#" },
      { nome: "Categoria 2.22", link: "#" },
      { nome: "Categoria 2.23", link: "#" },
      { nome: "Categoria 2.24", link: "#" },
    ],

    3: [
      { nome: "Categoria 3.1", link: "#" },
      { nome: "Categoria 3.2", link: "#" },
      { nome: "Categoria 3.3", link: "#" },
      { nome: "Categoria 3.4", link: "#" },
      { nome: "Categoria 3.5", link: "#" },
      { nome: "Categoria 3.6", link: "#" },
      { nome: "Categoria 3.7", link: "#" },
      { nome: "Categoria 3.8", link: "#" },
      { nome: "Categoria 3.9", link: "#" },
      { nome: "Categoria 3.10", link: "#" },
      { nome: "Categoria 3.11", link: "#" },
      { nome: "Categoria 3.12", link: "#" },
      { nome: "Categoria 3.13", link: "#" },
      { nome: "Categoria 3.14", link: "#" },
      { nome: "Categoria 3.15", link: "#" },
      { nome: "Categoria 3.16", link: "#" },
      { nome: "Categoria 3.17", link: "#" },
      { nome: "Categoria 3.18", link: "#" },
      { nome: "Categoria 3.19", link: "#" },
      { nome: "Categoria 3.20", link: "#" },
      { nome: "Categoria 3.21", link: "#" },
      { nome: "Categoria 3.22", link: "#" },
      { nome: "Categoria 3.23", link: "#" },
      { nome: "Categoria 3.24", link: "#" },
    ],

    4: [
      { nome: "Categoria 4.1", link: "#" },
      { nome: "Categoria 4.2", link: "#" },
      { nome: "Categoria 4.3", link: "#" },
      { nome: "Categoria 4.4", link: "#" },
      { nome: "Categoria 4.5", link: "#" },
      { nome: "Categoria 4.6", link: "#" },
      { nome: "Categoria 4.7", link: "#" },
      { nome: "Categoria 4.8", link: "#" },
      { nome: "Categoria 4.9", link: "#" },
      { nome: "Categoria 4.10", link: "#" },
      { nome: "Categoria 4.11", link: "#" },
      { nome: "Categoria 4.12", link: "#" },
      { nome: "Categoria 4.13", link: "#" },
      { nome: "Categoria 4.14", link: "#" },
      { nome: "Categoria 4.15", link: "#" },
      { nome: "Categoria 4.16", link: "#" },
      { nome: "Categoria 4.17", link: "#" },
      { nome: "Categoria 4.18", link: "#" },
      { nome: "Categoria 4.19", link: "#" },
      { nome: "Categoria 4.20", link: "#" },
      { nome: "Categoria 4.21", link: "#" },
      { nome: "Categoria 4.22", link: "#" },
      { nome: "Categoria 4.23", link: "#" },
      { nome: "Categoria 4.24", link: "#" },
    ],

    5: [
      { nome: "Categoria 5.1", link: "#" },
      { nome: "Categoria 5.2", link: "#" },
      { nome: "Categoria 5.3", link: "#" },
      { nome: "Categoria 5.4", link: "#" },
      { nome: "Categoria 5.5", link: "#" },
      { nome: "Categoria 5.6", link: "#" },
      { nome: "Categoria 5.7", link: "#" },
      { nome: "Categoria 5.8", link: "#" },
      { nome: "Categoria 5.9", link: "#" },
      { nome: "Categoria 5.10", link: "#" },
      { nome: "Categoria 5.11", link: "#" },
      { nome: "Categoria 5.12", link: "#" },
      { nome: "Categoria 5.13", link: "#" },
      { nome: "Categoria 5.14", link: "#" },
      { nome: "Categoria 5.15", link: "#" },
      { nome: "Categoria 5.16", link: "#" },
      { nome: "Categoria 5.17", link: "#" },
      { nome: "Categoria 5.18", link: "#" },
      { nome: "Categoria 5.19", link: "#" },
      { nome: "Categoria 5.20", link: "#" },
      { nome: "Categoria 5.21", link: "#" },
      { nome: "Categoria 5.22", link: "#" },
      { nome: "Categoria 5.23", link: "#" },
      { nome: "Categoria 5.24", link: "#" },
    ],

    6: [
      { nome: "Categoria 6.1", link: "#" },
      { nome: "Categoria 6.2", link: "#" },
      { nome: "Categoria 6.3", link: "#" },
      { nome: "Categoria 6.4", link: "#" },
      { nome: "Categoria 6.5", link: "#" },
      { nome: "Categoria 6.6", link: "#" },
      { nome: "Categoria 6.7", link: "#" },
      { nome: "Categoria 6.8", link: "#" },
      { nome: "Categoria 6.9", link: "#" },
      { nome: "Categoria 6.10", link: "#" },
      { nome: "Categoria 6.11", link: "#" },
      { nome: "Categoria 6.12", link: "#" },
      { nome: "Categoria 6.13", link: "#" },
      { nome: "Categoria 6.14", link: "#" },
      { nome: "Categoria 6.15", link: "#" },
      { nome: "Categoria 6.16", link: "#" },
      { nome: "Categoria 6.17", link: "#" },
      { nome: "Categoria 6.18", link: "#" },
      { nome: "Categoria 6.19", link: "#" },
      { nome: "Categoria 6.20", link: "#" },
      { nome: "Categoria 6.21", link: "#" },
      { nome: "Categoria 6.22", link: "#" },
      { nome: "Categoria 6.23", link: "#" },
      { nome: "Categoria 6.24", link: "#" },
    ],

    7: [
      { nome: "Categoria 7.1", link: "#" },
      { nome: "Categoria 7.2", link: "#" },
      { nome: "Categoria 7.3", link: "#" },
      { nome: "Categoria 7.4", link: "#" },
      { nome: "Categoria 7.5", link: "#" },
      { nome: "Categoria 7.6", link: "#" },
      { nome: "Categoria 7.7", link: "#" },
      { nome: "Categoria 7.8", link: "#" },
      { nome: "Categoria 7.9", link: "#" },
      { nome: "Categoria 7.10", link: "#" },
      { nome: "Categoria 7.11", link: "#" },
      { nome: "Categoria 7.12", link: "#" },
      { nome: "Categoria 7.13", link: "#" },
      { nome: "Categoria 7.14", link: "#" },
      { nome: "Categoria 7.15", link: "#" },
      { nome: "Categoria 7.16", link: "#" },
      { nome: "Categoria 7.17", link: "#" },
      { nome: "Categoria 7.18", link: "#" },
      { nome: "Categoria 7.19", link: "#" },
      { nome: "Categoria 7.20", link: "#" },
      { nome: "Categoria 7.21", link: "#" },
      { nome: "Categoria 7.22", link: "#" },
      { nome: "Categoria 7.23", link: "#" },
      { nome: "Categoria 7.24", link: "#" },
    ],

    8: [
      { nome: "Categoria 8.1", link: "#" },
      { nome: "Categoria 8.2", link: "#" },
      { nome: "Categoria 8.3", link: "#" },
      { nome: "Categoria 8.4", link: "#" },
      { nome: "Categoria 8.5", link: "#" },
      { nome: "Categoria 8.6", link: "#" },
      { nome: "Categoria 8.7", link: "#" },
      { nome: "Categoria 8.8", link: "#" },
      { nome: "Categoria 8.9", link: "#" },
      { nome: "Categoria 8.10", link: "#" },
      { nome: "Categoria 8.11", link: "#" },
      { nome: "Categoria 8.12", link: "#" },
      { nome: "Categoria 8.13", link: "#" },
      { nome: "Categoria 8.14", link: "#" },
      { nome: "Categoria 8.15", link: "#" },
      { nome: "Categoria 8.16", link: "#" },
      { nome: "Categoria 8.17", link: "#" },
      { nome: "Categoria 8.18", link: "#" },
      { nome: "Categoria 8.19", link: "#" },
      { nome: "Categoria 8.20", link: "#" },
      { nome: "Categoria 8.21", link: "#" },
      { nome: "Categoria 8.22", link: "#" },
      { nome: "Categoria 8.23", link: "#" },
      { nome: "Categoria 8.24", link: "#" },
    ],
  };

  if (categorias[departamentoId]) {
    let categoriasHTML = `
      <div class="categorias-container-left">
        <div class="departamento-titulo">
          <h3>Departamento</h3>
        </div>
        <div class="categorias-colunas">
    `;
    for (let i = 0; i < categorias[departamentoId].length; i += 8) {
      categoriasHTML += '<ul class="coluna">';
      for (let j = i; j < i + 8 && j < categorias[departamentoId].length; j++) {
        categoriasHTML += `<li><a href="${categorias[departamentoId][j].link}">${categorias[departamentoId][j].nome}</a></li>`;
      }
      categoriasHTML += "</ul>";
    }
    categoriasHTML += `
        </div>
      </div>
      <div class="categorias-container-right">
        <div class="img-categorias">
          <h3>Confira os
            Produtos
            <b>Que acabaram
              De chegar</b>
          </h3>
          <button>Ver todos</button>
        </div>
      </div>
    `;
    categoriasExibidas.innerHTML = categoriasHTML;
    categoriasExibidas.classList.add("mostrar");
  } else {
    categoriasExibidas.innerHTML = "<p>Nenhuma categoria encontrada.</p>";
    categoriasExibidas.classList.add("mostrar");
  }
}

// Adiciona event listener para o mouseleave no container de categorias
categoriasExibidas.addEventListener("mouseleave", () => {
  categoriasExibidas.classList.remove("mostrar");
});

// Adiciona event listener para o mouseleave nos elementos de departamento
departamentos.forEach((departamento) => {
  departamento.addEventListener("mouseleave", () => {
    // Adiciona um pequeno atraso para permitir que o mouse entre no container de categorias
    setTimeout(() => {
      // Verifica se o mouse ainda não está dentro do container de categorias
      if (!categoriasExibidas.matches(":hover")) {
        categoriasExibidas.classList.remove("mostrar");
      }
    }, 100); // Ajuste o valor do atraso conforme necessário
  });
});

//FUNÇÃO DE CARROSEL--------------------------------------------------------------------------------------

new Swiper(".card-wrapper", {
  loop: false,
  spaceBetween: 20,

  // Pagination bullets
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // Responsive breakpoints
  breakpoints: {
    0: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 5,
    },
  },
});

//FUNÇÃO DE DETAILS--------------------------------------------------------------------------------------

const titulos = document.querySelectorAll(".div-links h3");

titulos.forEach((titulo) => {
  titulo.addEventListener("click", function () {
    const divLinks = this.parentElement;
    divLinks.classList.toggle("aberto");
  });
});

//FUNÇÃO DO MENU NO MOBILE--------------------------------------------------------------------------------------

document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.getElementById("img-menu");
  const menu = document.querySelector(".div-ul");

  if (menuIcon && menu) {
    menuIcon.addEventListener("click", function () {
      // Verifica se o menu está atualmente visível ou não
      const isMenuVisible = menu.style.display === "grid";

      // Se o menu estiver visível, esconde. Se não, mostra.
      if (isMenuVisible) {
        menu.style.display = "none";
      } else {
        menu.style.display = "grid";
      }
    });
  }
});
