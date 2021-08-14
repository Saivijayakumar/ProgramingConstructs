// Flip coin until any one get 11
let headResult = 0;
let tailResult = 0;
while (headResult != 11 && tailResult != 11) {
    let coin = Math.floor(Math.random() * 2);
    if (coin == 0) {
        headResult++;
    }
    else {
        tailResult++;
    }
}
if (headResult > tailResult) {
    console.log("Head win's");
}
else {
    console.log("Tail win's");
}

