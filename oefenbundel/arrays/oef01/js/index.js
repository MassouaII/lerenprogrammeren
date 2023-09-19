

//let som=0;
let getal=Number(prompt("Geef getallen in"));
let mijnArray=[];
//let hoeveelsteGetal= Number(prompt("Geef in het hoeveelste geval je wil op scherm zien"));
while (getal>0){
    mijnArray.push(getal);
    //som=som+getal;
    getal=Number(prompt("Geef getallen in"));

}
document.write(mijnArray,"<br>");
hoeveelsteGetal=Number(prompt("Geef in het hoeveelste getal je wil op scherm zien"));
//document.write("="+ som);
document.write(mijnArray[hoeveelsteGetal]);
