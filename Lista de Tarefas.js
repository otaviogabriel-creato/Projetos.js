const promptsync = require ("prompt-sync")();
let listadeTarefas = []
let tarefasConcluidas = []
let opcao;
let tarefa;

console.log("OLÁ BEM VINDO À SUA LISTA DE TAREFAS");

function exibicao (){
    console.log("=== Lista de Tarefas ===\n")
        for(let i = 0;i < listadeTarefas.length;i++){
                console.log(i + "." + listadeTarefas[i])
                    
            }
}

function MENU() {
    console.log("\n<=== MENU ===>\n")
    console.log("1 - Adicionar Tarefa");
    console.log("2 - Remover Tarefa");
    console.log("3 - Concluir tarefa");
    console.log("4 - Mostrar Lista de Tarefas Concluidas")
    console.log("5 - Mostrar Lista de Tarefas Pendentes")
    console.log("0 - Sair\n");
}

function sair() {
    console.log("\nSaindo.....");
}

function adicionarTarefa() {
     tarefa = promptsync("Adicionar tarefa:")
        console.log("")
        listadeTarefas.push(tarefa)
        exibicao()     
}

function removerTarefa() {
    tarefa = promptsync("Remover tarefa:")

        let indice = listadeTarefas.indexOf(tarefa);

        if (indice !== -1) {
          listadeTarefas.splice(indice, 1);
        }
            exibicao()
}
     function concluirTarefa() {
         tarefa = promptsync("Concluir tarefa:")       

    let indice = listadeTarefas.indexOf(tarefa);

    if (indice !== -1) {
        console.log(indice + ". " + listadeTarefas[indice] + " ✔ ");
        tarefasConcluidas.push(listadeTarefas[indice]);
        listadeTarefas.splice(indice, 1);
    }
   exibicao()
}


function listaConcluidas() {
    console.log("=== Lista de Tarefas Concluidas ===\n")
        for(let i = 0 ;i < tarefasConcluidas.length;i++){
                console.log(i + "." + tarefasConcluidas[i])
                        
            }
        console.log("")
        console.log("//Fim//")
}

function tarefasPendentes() {
    console.log("=== Lista de Tarefas Pendentes ===\n")
        exibicao()
        console.log("")
        console.log("//Fim//")
}

while(opcao !== "0"){
    console.log("")
    MENU()
    console.log("")
    opcao = promptsync("Opção do Menu:")
        if(opcao === ""){
            opcao = "0"
        }
    console.log("")
    
switch (opcao) {
    case "1":
       adicionarTarefa();
        break;

    case "0":
        sair();
        break;
    
    case "2":
        removerTarefa();
        break;
    
    case "3":
      concluirTarefa();
        break;

    case "4":
        listaConcluidas();
        break;

    case "5":
        tarefasPendentes();
        break;

    default:
        console.log("Comando Inválido/Inexistente.")
        break;

}
}
