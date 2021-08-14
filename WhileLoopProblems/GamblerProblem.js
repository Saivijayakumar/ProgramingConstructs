//finding Gambler win or not and displaying win,losses,total cout
const win = 200, lose = 0;
let currentMoney = 100, count = 0, wincount = 0, losecount = 0;
while (currentMoney < win && lose < currentMoney) {
    let bet = Math.floor(Math.random() * 2);
    if (bet == 1) {
        currentMoney++;
        wincount++;
    }
    else {

        currentMoney--;
        losecount++;
    }
    count++;
}
console.log(`\nNumber of Wins : ${wincount} \nNumber of losses : ${losecount}\nTotal Bets made by gambler : ${count}`);
if (currentMoney == 200) {
    console.log(`-----------------------\nGambler Won the Match! \nNow Gambler having ${currentMoney}`);
}
else {
    console.log(`----------------------\nGambler lost the Match! \nNow Gambler having ${currentMoney}`);
}