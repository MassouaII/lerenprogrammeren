
//let hoeveelGetallen = Number(prompt("Hoeveel getallen?"));
// for(let i=1;i<=hoeveelGetallen;i++){
//     let getal=Number(prompt("Geef getal "+ i +" in: " ));
//     //som=som+getal;
//     som+=getal;
// }
// document.write("De totale som van " + hoeveelGetallen + " getallen is " + som);

// let i=1;
// while (i<10){
//     document.write(i);
//     i++;
// }
let hoeveelGetallen = Number(prompt("Hoeveel getallen?"));
let i= 1;
let getal= Number(prompt("Geef getal"+ i +" in: "));
let som=0;
som+=getal;
while(i<=hoeveelGetallen){
      i++;
    }
    document.write("De totale som van " + hoeveelGetallen + " getallen is " + som);