// controlador.js

const Contato = require('./modelo'); // Importa a classe Contato do arquivo modelo.js

const contatos = []; // Declara a constante contatos e inicializa com um array vazio

// Função para adicionar um novo contato
function adicionarContato(nome, email, telefone) {
    const novoContato = new Contato(nome, email, telefone); // Cria uma instância de Contato
    contatos.push(novoContato); // Adiciona o novoContato ao array contatos
}

// Função para listar todos os contatos
function listarContatos() {
    return contatos; // Retorna o array contatos
}

// Função para buscar um contato pelo nome
function buscarContato(nome) {
    return contatos.find(contato => contato.nome === nome); // Retorna o contato com o nome correspondente, se encontrado
}

// Função para atualizar um contato
function atualizarContato(nome, email, telefone) {
    const contato = buscarContato(nome); // Busca o contato pelo nome
    if (contato) {
        contato.email = email; // Atualiza o email do contato
        contato.telefone = telefone; // Atualiza o telefone do contato
        return true; // Retorna true se o contato for encontrado e atualizado com sucesso
    } else {
        return false; // Retorna false se o contato não for encontrado
    }
}

// Função para remover um contato pelo nome
function removerContato(nome) {
    const index = contatos.findIndex(contato => contato.nome === nome); // Encontra o índice do contato pelo nome
    if (index !== -1) {
        contatos.splice(index, 1); // Remove o contato do array contatos
        return true; // Retorna true se o contato for encontrado e removido com sucesso
    } else {
        return false; // Retorna false se o contato não for encontrado
    }
}

module.exports = { adicionarContato, listarContatos, buscarContato, atualizarContato, removerContato }; // Exporta todas as funções para uso em outros módulos
