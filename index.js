// Calculadora de Partidas Ranqueadas

//variáveis 
let userName = "Thiago"
let win = "500"
let lose = "0"

//constante de textos para exebição no resultado
const textCacl = "Saldo de vitórias é feito pela quantidade de partidas ganhas menos as perdidas"
const textName = " você tem saldo de vitórias de: "
const textWin = "Vitórias: "
const textLose = "Derrotas: "
const textRank = " e seu rank atual é: "

//função para calcular as partidas
function calc(win, lose)
{
    return win - lose
}
    let result = calc(win, lose)

//estrutura de decisões de acordo com o resultado da função
if (result <= 10)
    {
        console.log(textCacl)
        console.log(textWin + win)
        console.log(textLose + lose)
        console.log(userName + textName + result + textRank + "Ferro!")
    }
else if (result >= 11 && result <= 20)
    {
        console.log(textCacl)
        console.log(textWin + win)
        console.log(textLose + lose)
        console.log(userName + textName + result + textRank + "Bronze!")
    }
else if (result >= 21 && result <= 50)
    {
        console.log(textCacl)
        console.log(textWin + win)
        console.log(textLose + lose)
        console.log(userName + textName + result + textRank + "Prata!")
    }
else if (result >= 51 && result <= 80)
    {
        console.log(textCacl)
        console.log(textWin + win)
        console.log(textLose + lose)
        console.log(userName + textName + result + textRank + "Ouro!")
    }
else if (result >= 81 && result <= 90)
    {
        console.log(textCacl)
        console.log(textWin + win)
        console.log(textLose + lose)
        console.log(userName + textName + result + textRank + "Diamante!")
    }
else if (result >= 91 && result <= 100)
    {
        console.log(textCacl)
        console.log(textWin + win)
        console.log(textLose + lose)
        console.log(userName + textName + result + textRank + "Lendário!")
    }
else if (result >= 101)
    {
        console.log(textCacl)
        console.log(textWin + win)
        console.log(textLose + lose)
        console.log(userName + textName + result + textRank + "Imortal!")
    }
else
    {
        console.log("Somente números são válidos para calcular o seu rank!")
    }