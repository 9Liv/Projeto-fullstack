const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const url = `http://localhost:3000/livros/${id}`;
const div = document.getElementById("detalhe");

fetch(url)
  .then(res => res.json())
  .then(livro => {
    div.innerHTML = `
      <h1>${livro.nome}</h1>
      <p>${livro.autor}</p>
      <p>${livro.descricao}</p>
      <button onclick="excluir()">Excluir</button>
    `;
  });

function excluir() {
  fetch(url, { method: "DELETE" })
    .then(() => {
      alert("Deletado!");
      window.location.href = "index.html";
    });
}