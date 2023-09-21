let hoeveelNamen = Number(prompt("Hoeveel namen?"));
let mijnKlaslijst=[];
for (let i=0; i<hoeveelNamen; i++){
    let namen= prompt("Geef naam "+ i +" in: " );
    mijnKlaslijst.push(namen);
   // mijnKlaslijst.push( x%2 === 0 ? "    " + namen : namen );

}

if (mijnKlaslijst %2 === 0){
    document.write(mijnKlaslijst.join("<br>"));
 }else{
      document.write("     " +mijnKlaslijst.join("<br>"));
  }


