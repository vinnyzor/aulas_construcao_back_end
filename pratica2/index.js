const readline = require('readline-sync');
const contatoControlador = require('./controlador');


function menu() {
    console.log('1. Adicionar contato');
    console.log('2. Listar contatos');
    console.log('3. Buscar contato');
    console.log('4. Atualizar contato');
    console.log('5. Remover contato');
    console.log('6. Sair');
}


function escolherOpcao(opcao) {
    switch (opcao) {
        case '1':
            // Adicionar contato
            const nome = readline.question('Digite o nome do contato: ');
            const email = readline.question('Digite o email do contato: ');
            const telefone = readline.question('Digite o telefone do contato: ');
            contatoControlador.adicionarContato(nome, email, telefone);
            break;
        case '2':
            // Listar contatos
            const contatos = contatoControlador.listarContatos();
            contatos.forEach(contato => {
                console.log('Nome:', contato.nome);
                console.log('Email:', contato.email);
                console.log('Telefone:', contato.telefone);
                console.log('------------------------');
            });
            break;
        case '3':
            // Buscar contato
            const nomeBusca = readline.question('Digite o nome do contato que deseja buscar: ');
            const contatoBusca = contatoControlador.buscarContato(nomeBusca);
            if (contatoBusca) {
                console.log('Nome:', contatoBusca.nome);
                console.log('Email:', contatoBusca.email);
                console.log('Telefone:', contatoBusca.telefone);
            } else {
                console.log('Contato não encontrado.');
            }
            break;
        case '4':
            // Atualizar contato
            const nomeAtualizar = readline.question('Digite o nome do contato que deseja atualizar: ');
            const emailNovo = readline.question('Digite o novo email do contato: ');
            const telefoneNovo = readline.question('Digite o novo telefone do contato: ');
            const atualizado = contatoControlador.atualizarContato(nomeAtualizar, emailNovo, telefoneNovo);
            if (atualizado) {
                console.log('Contato atualizado com sucesso.');
            } else {
                console.log('Contato não encontrado.');
            }
            break;
        case '5':
            // Remover contato
            const nomeRemover = readline.question('Digite o nome do contato que deseja remover: ');
            const removido = contatoControlador.removerContato(nomeRemover);
            if (removido) {
                console.log('Contato removido com sucesso.');
            } else {
                console.log('Contato não encontrado.');
            }
            break;
        case '6':
            process.exit(); // Encerra a execução do programa
        default:
            console.log('Opção inválida.');
    }
}


function main() {
    while (true) {
        menu(); // Mostra o menu
        const opcao = readline.question('Escolha uma opção: ');
        escolherOpcao(opcao); // Executa a opção escolhida
    }
}


main(); // Inicia o programa
