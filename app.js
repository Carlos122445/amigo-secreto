let amigos = [];

function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();

    if (nome === "") {
        alert("Digite um nome válido!");
        return;
    }
    
    if (amigos.includes(nome)) {
        alert("Esse nome já foi adicionado!");
        return;
    }

    amigos.push(nome);
    input.value = "";
    exibirAmigos();
}

function exibirAmigos() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    
    amigos.forEach(amigo => {
        const item = document.createElement("li");
        item.textContent = amigo;
        lista.appendChild(item);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Adicione pelo menos dois amigos para sortear!");
        return;
    }

    let sorteio = [...amigos];
    let resultado = [];
    
    for (let i = 0; i < amigos.length; i++) {
        let indice;
        do {
            indice = Math.floor(Math.random() * sorteio.length);
        } while (sorteio[indice] === amigos[i]);
        
        resultado.push(`${amigos[i]} -> ${sorteio[indice]}`);
        sorteio.splice(indice, 1);
    }
    
    document.getElementById("resultado").innerHTML = resultado.map(r => `<li>${r}</li>`).join("");
}

//tive alguns problemas que me fizeram ficar sempc por um bom tempo. Sinceramente, nao conclui tudo exatamentedo jeito correto, mas agora que estou com um note (mesmo que velho), farei todos os processos adequadamente. Agradeço.