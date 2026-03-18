const url = "http://localhost:3000/livros";
const container = document.getElementById("container");

async function buscarTodos() {
  const response = await fetch(url);
  const data = await response.json();

  data.map((livro) => {
    const div = document.createElement("div");
  
    const nome = document.createElement("h2");
    nome.innerText = livro.nome;
  
    const img = document.createElement("img");
    img.src = livro.imagem;
    img.style.width = "100%";
  
    const preco = document.createElement("p");
    preco.innerText = "R$ " + livro.preco;
  
    const link = document.createElement("a");
    link.innerText = "Mais informações";
    link.setAttribute("href", `livro.html?id=${livro.id}`);
  
    div.appendChild(img);
    div.appendChild(nome);
    div.appendChild(preco);
    div.appendChild(link);
  
    container.appendChild(div);
  });
}

buscarTodos();