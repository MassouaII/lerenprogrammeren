//for loop

//for(teller;conditie;manipulatie van de teller){
  //  uitvoering code
//}
//3de parameter
//optelling: i=i+1; i+=1; i++; i--

//for(let i=1;i<=10;i++){
  //  document.write(i);
//}
// for(let i=1;i<=10;i+=2){
// document.write(i);
// }
// for(let i=10;i>1;i--){
// document.write(i);
// }
//for(let i=1;i<=3;i++){
//  document.write("Geef getal ",i, " in:<br>");
//}
let som= 0;
for(let i=1;i<=3;i++){
 let getal=Number(prompt("Geef getal " + i + " in:"));
 som = som + getal;
}
document.write(som);