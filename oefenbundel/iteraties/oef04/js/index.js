//let x=5;
//resultaat=1;
//for (let i=1; i<=5; i--){
//   resultaat*=x;

//document.write();
//}
//
const ingevoerdGetal= Number(prompt("Geef de faculteit van het getal:"));
let faculteit = 1;
let faculteitString =ingevoerdGetal + "!";
for (let i=ingevoerdGetal; i>=1; i--){
    //faculteit*= i;
    faculteit =faculteit *i;
    if (i !==ingevoerdGetal){
        faculteitString+="x"+i;
    }
}
document.write(faculteitString+ "=" + faculteit);
//document.write(`${ingevoerdGetal}! = ${faculteit}`);