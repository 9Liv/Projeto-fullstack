const url = "http://localhost:3000/livros";

document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();

  const nome = document.getElementById("nome").value;
  const autor = document.getElementById("autor").value;
  const descricao = document.getElementById("descricao").value;

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ nome, autor, descricao })
  })
  .then(() => {
    alert("Livro cadastrado!");
  });
});