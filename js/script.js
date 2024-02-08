const botaoBuscar = document.querySelector(".button-65");
const cep = document.querySelector("#cep");
const rua = document.querySelector("#rua");
const bairro = document.querySelector("#bairro");
const cidade = document.querySelector("#cidade");
const estado = document.querySelector("#estado");

async function buscarCep() {
  await fetch(`https://viacep.com.br/ws/${cep.value}/json/`)
    .then((response) => response.json())
    .then((r) => {
      rua.value = `${r.logradouro}`;
      bairro.value = `${r.bairro}`;
      cidade.value = `${r.localidade}`;
      estado.value = `${r.uf}`;
    });
}

botaoBuscar.addEventListener("click", buscarCep);
