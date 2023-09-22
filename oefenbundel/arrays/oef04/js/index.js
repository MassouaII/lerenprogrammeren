let hoeveelNamen = Number(prompt("Hoeveel namen?"));
let mijnKlaslijst=[];
for (let i=0; i<hoeveelNamen; i++){
    let namen= prompt("Geef naam "+ i +" in: " );
    mijnKlaslijst.push(i%2 === 0 ? "-    " + namen : namen);
    }

document.write(mijnKlaslijst.join("<br>"));

// I first push just the names in the 1st for loop
//mijnKlaslijst.push(namen);
// outside that loop, I create another loop
// for( let i = 0; i < hoeveelNamen; i++ ) {
//     if (i % 2 === 0) {
//         document.write("-   " + mijnKlaslijst[i], "<br>");
//     } else {
//         document.write(mijnKlaslijst[i], "<br>");
//     }
// }

//Teacher's solution
// var namenLijst=[];
// aantalNamen = parseInt(prompt('Hoeveel namen wenst u in te geven?'));
// for(var x=0; x <= aantalNamen-1; x++){
//     namenLijst.push(prompt(`Geef naam nummer ${x+1} in`));
// }
// for(var x=0; x <= aantalNamen-1; x++){
//     var resultaat = (x%2 == 0) ? document.write('- ',namenLijst[x],'<br>') :  document.write('&nbsp;&nbsp;- ',namenLijst[x],'<br>');//voorbeeld van shorthand if, else.
// }
