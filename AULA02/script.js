let tarefas = [];

function adicionarTarefa() {
    const inputTarefa = document.getElementById("inputTarefa") /* Atribui o elemento input a constante inputTarefa*/
    const mensagem = document.getElementById("mensagem"); // Atribui o elemento div a constante mensagem
    let tarefa = inputTarefa.value.trim(); // Atribui o valor do input a variável tarefa (pegando o valor do input que o usuário digitou)
    // trim() remove os espaços em branco no início e no final da string
    let mensagemErro = "Digite uma tarefa!";
    let mensagemSucesso = "Tarefa adicionada com sucesso!";

    if (tarefa == "") {
        mensagem.textContent = mensagemErro; // Adiciona o texto a div mensagem COM ERRO
        mensagem.style.color = "#a34743"; // Adiciona a cor vermelha ao texto
    } else {

        mensagem.textContent = mensagemSucesso; // Adiciona o texto a div mensagem
        mensagem.style.color = "#28a745"; // Adiciona a cor verde ao texto
        tarefas.push(tarefa);
        renderizarTarefas()
        criarBotaoLimpar()
    }


    inputTarefa.value = "" // Limpa o campo input
}
//console.log(); /* Exibe no console do navegador o valor da variável */

function criarBotaoLimpar() {
    if (!document.querySelector(".botao_lista")) {
        let containerLista = document.getElementById("container")
        let botaoLimpar = document.createElement("button")
        botaoLimpar.className = 'botao_lista'
        botaoLimpar.textContent = "Limpar lista"
        botaoLimpar.onclick = () => limparLista();
        containerLista.appendChild(botaoLimpar);
    }
}

function renderizarTarefas() {
    const listaTarefas = document.getElementById("listaTarefas");

    listaTarefas.innerHTML = "";

    //criando um loop na lista
    for (let i = 0; i < tarefas.length; i++) {
        let novaTarefa = document.createElement("li"); // Cria um elemento li
        novaTarefa.textContent = tarefas[i]; // Adiciona o texto da tarefa ao elemento li

        let botaoRemover = document.createElement("button")
        botaoRemover.className = "remover"
        botaoRemover.textContent = "Remover"
        botaoRemover.onclick = () => removerTarefa(i)

        let botaoEditar = document.createElement("button")
        botaoEditar.className = "editar"
        botaoEditar.textContent = "Editar"
        botaoEditar.onclick = () => editarTarefa(i)

        novaTarefa.appendChild(botaoRemover)
        novaTarefa.appendChild(botaoEditar)
        listaTarefas.appendChild(novaTarefa); // Adiciona o elemento filho ao elemento pai
    }
}

function removerTarefa(i) {
    tarefas.splice(i, 1) //para dizer quantos itens deletar a partir do indice
    renderizarTarefas()
}

function editarTarefa(i) {
    let tarefaEditada = prompt("Edite a tarefa:");
    if (tarefaEditada.trim() !== "") {
        tarefas[i] = tarefaEditada;
        renderizarTarefas()
    }
}

function limparLista() {
    tarefas.length = 0
    renderizarTarefas()
    const mensagem = document.getElementById("mensagem")
    mensagem.textContent = "Lista limpa com sucesso!"
    document.querySelector(".botao_lista").remove();
}


