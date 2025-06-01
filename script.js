const numeroSecreto = Math.floor(Math.random() * 100) + 1; // Gera um número aleatório entre 1 e 100
let tentativas = 0; // Contador de tentativas
function verificapalpite() {
    const palpite = parseInt(document.getElementById("palpite").value); // Obtém o número digitado pelo usuário
    tentativas++; // Incrementa o contador de tentativas    

    if (palpite < 1 || palpite > 100) {
        document.getElementById('resultado').textContent = "Digite um número entre 1 e 100.";
        document.getElementById('dica').textContent = "";
        return;
    }

    if (palpite === numeroSecreto){
        document.getElementById('resultado').textContent = "Parabéns!Você acertou";
        document.getElementById('dica').textContent = "";
        document.getElementById('palpite').disabled = true; // Desabilita o campo de palpite       
    }else if (palpite < numeroSecreto) {
        document.getElementById('resultado').textContent = "O número é maior!";
        document.getElementById('dica').textContent = "Tente um número maior.";
    }else if (palpite > numeroSecreto) {
        document.getElementById('resultado').textContent = "O número é menor!";
        document.getElementById('dica').textContent = "Tente um número menor.";
    }
    if (tentativas >= 10) {
        document.getElementById('resultado').textContent = "Você perdeu! O número era " + numeroSecreto;
        document.getElementById('dica').textContent = "";
        document.getElementById('palpite').disabled = true; // Desabilita o campo de palpite        
    }

    document.getElementById('tentativas').textContent = "Tentativas: "+ tentativas; // Atualiza o número de tentativas
    document.getElementById('palpite').value = ""; // Limpa o campo de palpite

}