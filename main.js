const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const btnBiscoito = document.querySelector("#btnBiscoito");
const btnReset = document.querySelector("#btnReset");
const fraseAleatorias = document.querySelector("#fraseAleatorias");


//frases aleatórias
const frases = [
  "A vida trará coisas boas se tiver paciência.",
  "O sucesso está logo ali, continue persistindo.",
  "Acredite em si mesmo e conquiste seus sonhos.",
  "Grandes coisas estão por vir, mantenha a esperança.",
  "Seja gentil e verá o mundo se abrir para você.",
  "O aprendizado é a chave para o crescimento pessoal.",
];

// Eventos
btnBiscoito.addEventListener('click', handleBiscoitoClick);
btnReset.addEventListener('click', handleResetClick);

// Função para gerar uma frase aleatória
function gerarFraseAleatoria() {
  const randomIndex = Math.floor(Math.random() * frases.length);
  return frases[randomIndex];
}

// Função de manipulação de clique do botão de biscoito
function handleBiscoitoClick(event) {
  event.preventDefault();
  fraseAleatorias.classList.add("animacaoSubir");
  
  toggleScreen();
  fraseAleatorias.innerText = gerarFraseAleatoria();

}

// Função de manipulação de clique do botão de reset
function handleResetClick() {
  toggleScreen();
  fraseAleatorias.classList.remove("animacaoSubir");
  
}

// Função para alternar entre as telas
function toggleScreen() {
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
}