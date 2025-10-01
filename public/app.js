
const receitas = [
  {
    id: 1,
    titulo: "PÃ£o de Queijo",
    descricao: "Feito com polvilho e queijo mineiro, perfeito para o cafÃ© da tarde.",
    imagem: "imagempÃ£odequeijo.jpeg",
    ingredientes: [
      "500g de polvilho azedo",
      "250ml de leite",
      "100ml de Ã³leo",
      "2 ovos",
      "200g de queijo minas meia cura ralado",
      "Sal a gosto"
    ],
    preparo: "Misture os ingredientes atÃ© formar uma massa homogÃªnea. Modele bolinhas e asse em forno preaquecido a 200Â°C por cerca de 25 minutos."
  },
  {
    id: 2,
    titulo: "FeijÃ£o Tropeiro",
    descricao: "Receita rica em sabores, preparada com feijÃ£o, ovos e torresmo.",
    imagem: "imagemfeijÃ£otropeiro.jpeg",
    ingredientes: [
      "500g de feijÃ£o cozido",
      "200g de torresmo",
      "3 ovos",
      "Farinha de mandioca a gosto",
      "Cheiro-verde picado"
    ],
    preparo: "Misture o feijÃ£o com os ovos mexidos, adicione o torresmo e finalize com farinha e cheiro-verde."
  },
  {
    id: 3,
    titulo: "Frango com Quiabo",
    descricao: "Tradicional prato mineiro, simples e cheio de sabor.",
    imagem: "imagemfrangocomquiabo.jpeg",
    ingredientes: [
      "1 frango em pedaÃ§os",
      "300g de quiabo",
      "Alho, cebola e temperos a gosto"
    ],
    preparo: "Refogue o frango com alho e cebola, adicione Ã¡gua e cozinhe. Em outra panela, refogue o quiabo e junte ao frango."
  },
  {
    id: 4,
    titulo: "Tutu de FeijÃ£o",
    descricao: "Prato tÃ­pico com feijÃ£o e farinha, acompanhado de linguiÃ§a e couve.",
    imagem: "imagemtutudefeijÃ£o.jpeg",
    ingredientes: [
      "2 xÃ­caras de feijÃ£o cozido",
      "1 xÃ­cara de farinha de mandioca",
      "LinguiÃ§a e couve para acompanhar"
    ],
    preparo: "Bata o feijÃ£o, leve ao fogo e vÃ¡ adicionando a farinha atÃ© engrossar. Sirva com linguiÃ§a e couve refogada."
  }
];


function renderCards(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  receitas.forEach(r => {
    const card = document.createElement("div");
    card.className = "col-md-4 col-12";

    card.innerHTML = `
      <div class="card h-100 shadow-sm">
        <img src="${r.imagem}" class="card-img-top" alt="${r.titulo}">
        <div class="card-body">
          <h5 class="card-title">${r.titulo}</h5>
          <p class="card-text">${r.descricao}</p>
          <a href="detalhe.html?id=${r.id}" class="btn btn-warning text-dark fw-bold">Ver detalhes</a>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}


function renderDetalhe() {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get("id"));
  const receita = receitas.find(r => r.id === id);

  if (!receita) return;

  const container = document.getElementById("detalhe-receita");
  container.innerHTML = `
    <h1 class="mb-4">${receita.titulo}</h1>
    <img src="${receita.imagem}" class="img-fluid rounded mb-4 shadow" alt="${receita.titulo}">
    <p class="lead">${receita.descricao}</p>
    <h3>Ingredientes</h3>
    <ul>
      ${receita.ingredientes.map(i => `<li>${i}</li>`).join("")}
    </ul>
    <h3>Modo de Preparo</h3>
    <p>${receita.preparo}</p>
    <a href="receitas.html" class="btn btn-secondary mt-3">Voltar Ã s Receitas</a>
  `;
}