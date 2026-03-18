const url = "http://localhost:3000/livros";

const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nome = document.getElementById("nome").value;
  const autor = document.getElementById("autor").value;
  const descricao = document.getElementById("descricao").value;
  const imagem = document.getElementById("imagem").value;
  const preco = document.getElementById("preco").value;

  console.log({
    nome,
    autor,
    descricao,
    imagem,
    preco
  });
  
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      nome,
      autor,
      descricao,
      imagem,
      preco
    })
  })
  .then((res) => res.json())
  .then((data) => {
    console.log("Resposta:", data);
    alert("Livro cadastrado!");
    window.location.href = "index.html";
  })
  .catch((erro) => {
    console.log("ERRO:", erro);
  });
});