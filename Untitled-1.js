let nomeHeroi = "Arqueiro"
let nivel = 2600
let NiveldoHeroi = "";


if (nivel <= 1000) {
    NiveldoHeroi = "Ferro"
} else if (nivel > 1001 && nivel <= 2000) {
    NiveldoHeroi = "Bronze"
    
} else if (nivel > 2001 && nivel <= 5000) {
    NiveldoHeroi = "Prata"

} else if (nivel > 5001 && nivel <= 7000) {
    NiveldoHeroi = "Ouro"
    
} else if (nivel > 7001 && nivel <= 8000) {
    NiveldoHeroi = "Platina"

} else if (nivel > 8001 && nivel <= 9000) {
    NiveldoHeroi = "Ascendente"

}  else if  (nivel > 9001 && nivel <= 10000) {
     NiveldoHeroi = "Imortal";

} else if (nivel > 1000) {
    NiveldoHeroi = "Radiante"
}
    

console.log ( "O Heroi de nome " + nomeHeroi + "esta no nivel de" + NiveldoHeroi)


