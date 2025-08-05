// Instruções para entrega
//  # 2️⃣ Calculadora de partidas Rankeadas
// **O Que deve ser utilizado**

// - Variáveis
// - Operadores
// - Laços de repetição
// - Estruturas de decisões
// - Funções

// ## Objetivo:

// Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
// depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

// Se vitórias for menor do que 10 = Ferro
// Se vitórias for entre 11 e 20 = Bronze
// Se vitórias for entre 21 e 50 = Prata
// Se vitórias for entre 51 e 80 = Ouro
// Se vitórias for entre 81 e 90 = Diamante
// Se vitórias for entre 91 e 100= Lendário
// Se vitórias for maior ou igual a 101 = Imortal

// ## Saída

// Ao final deve se exibir uma mensagem:
// "O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"

// Chamando as variaveis e funções
function main() {
 let playerNameUser = "Ivan"
 let playerWins = 100
 let playerDefeat = 0

 let valueBalance = calculateBalance(playerWins, playerDefeat)
 let levelRank = determineRank(playerWins)

 showProfileHero(playerNameUser, playerWins, playerDefeat, valueBalance, levelRank)


}

function calculateBalance(playerWins, playerDefeat) {
 return playerWins - playerDefeat
}
// Determinar o rank
function determineRank(wins) {
 if (wins < 10) {
     return "Ferro"
 } else if (wins <= 20) {
     return "Bronze"
 } else if (wins <= 50) {
     return "Prata"
 } else if (wins <= 80) {
     return "Ouro"
 } else if (wins <= 90) {
     return "Diamante"
 } else if (wins <= 100) {
     return "Lendário"
 } else {
     return "Imortal"
 }


}
// Criação do Perfil
function showProfileHero(playerNameUser, playerWins, playerDefeat, valueBalanceRank, levelRank) {
 console.log(`---------------------------------`);
 console.log(`    Perfil Competitive Player`);
 console.log(`---------------------------------`);
 console.log(` Nome: ${playerNameUser}`);
 console.log(` Vitórias: ${playerWins}`);
 console.log(` Derrotas: ${playerDefeat}`);
 console.log(` Saldo de Rankeadas: ${valueBalanceRank}`);
 console.log(` Nível: ${levelRank}`);
 console.log(`\nO Herói tem de saldo de ${valueBalanceRank} e está no nível de (${levelRank})`);
}


main()