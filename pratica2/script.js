// Importa o controlador
const contatoControlador = require('./controlador');

// Função para adicionar um novo contato
function adicionarContato() {
    const nome = prompt('Digite o nome do contato:');
    const email = prompt('Digite o email do contato:');
    const telefone = prompt('Digite o telefone do contato:');
    contatoControlador.adicionarContato(nome, email, telefone);
    document.getElementById('resultado').innerText = 'Contato adicionado com sucesso.';
}

// Função para listar todos os contatos
function listarContatos() {
    const contatos = contatoControlador.listarContatos();
    let listaHTML = '<h2>Lista de Contatos</h2>';
    contatos.forEach(contato => {
        listaHTML += `<p><strong>Nome:</strong> ${contato.nome}</p>`;
        listaHTML += `<p><strong>Email:</strong> ${contato.email}</p>`;
        listaHTML += `<p><strong>Telefone:</strong> ${contato.telefone}</p>`;
        listaHTML += '<hr>';
    });
    document.getElementById('resultado').innerHTML = listaHTML;
}

// Função para buscar um contato pelo nome
function buscarContato() {
    const nomeBusca = prompt('Digite o nome do contato que deseja buscar:');
    const contatoBusca = contatoControlador.buscarContato(nomeBusca);
    if (contatoBusca) {
        let resultadoHTML = '<h2>Contato Encontrado</h2>';
        resultadoHTML += `<p><strong>Nome:</strong> ${contatoBusca.nome}</p>`;
        resultadoHTML += `<p><strong>Email:</strong> ${contatoBusca.email}</p>`;
        resultadoHTML += `<p><strong>Telefone:</strong> ${contatoBusca.telefone}</p>`;
        document.getElementById('resultado').innerHTML = resultadoHTML;
    } else {
        document.getElementById('resultado').innerText = 'Contato não encontrado.';
    }
}

// Função para atualizar um contato
function atualizarContato() {
    const nomeAtualizar = prompt('Digite o nome do contato que deseja atualizar:');
    const emailNovo = prompt('Digite o novo email do contato:');
    const telefoneNovo = prompt('Digite o novo telefone do contato:');
    const atualizado = contatoControlador.atualizarContato(nomeAtualizar, emailNovo, telefoneNovo);
    if (atualizado) {
        document.getElementById('resultado').innerText = 'Contato atualizado com sucesso.';
    } else {
        document.getElementById('resultado').innerText = 'Contato não encontrado.';
    }
}

// Função para remover um contato pelo nome
function removerContato() {
    const nomeRemover = prompt('Digite o nome do contato que deseja remover:');
    const removido = contatoControlador.removerContato(nomeRemover);
    if (removido) {
        document.getElementById('resultado').innerText = 'Contato removido com sucesso.';
    } else {
        document.getElementById('resultado').innerText = 'Contato não encontrado.';
    }
}
