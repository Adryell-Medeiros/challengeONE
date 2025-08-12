//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

// Array para armazenar os nomes dos amigos
let amigos = [];

// Seleciona o botão e o campo de entrada
const btnAdicionar = document.getElementById('amigo');
const campoNome = document.getElementById('amigo');

// Adiciona um evento de clique ao botão
function adcionarAmigo() {
    // Captura o valor do campo de entrada
    let nome = campoNome.value.trim();

    // Valida se o campo não está vazio
    if (nome === '') {
        alert('Por favor, insira um nome válido');
        return;
    } else {
        // Adiciona o nome ao array de amigos
        amigos.push(nome);
    }

    // Adiciona o nome ao array de amigos
    campoNome.value = '';
    // Opcional: exibir uma mensagem de sucesso ou atualizar a interface
    console.log('Amigos: ', amigos);
}

// Supondo que sua lista no HTML tenha um id, por exemplo, 'listaAmigos'
const lista = document.getElementById('listaAmigos');

// Array de amigos
const amigo = amigos;

// Limpa a lista existente para evitar duplicados
lista.innerHTML = '';

// Percorre o array de amigos
for (let i = 0; i < amigo.length; i++) {
    // Cria um elemento de lista
    const li = document.createElement('li');
    // Define o texto do elemento como o nome do amigo
    li.textContent = amigo[i];
    // Adiciona o elemento à lista
    lista.appendChild(li);
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Não há amigos disponíveis para sortear.');
        return;
    } else {

        // Gerar um índice aleatório através do método de sorteo 'Math.random'
        const i = Math.floor(Math.random() * amigos.length);

        // Obter o nome sorteado
        const amigoSorteado = amigos[i];

        // Mostrar o resultado na página
        document.getElementById('resultado').innerHTML = `Amigo sorteado: ${amigoSorteado}`;
    }
}

