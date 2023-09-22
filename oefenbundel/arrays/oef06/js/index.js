let kleineletters=[];
let hoofdletters = [];
let teller = 97;
let test= String.fromCharCode(teller);
for(let x=0;x <=25;x++){
    kleineletters.push(String.fromCharCode(teller));
    hoofdletters.push(String.fromCharCode(teller-32));
    teller++;
}
document.write(kleineletters, "<br>");
document.write(hoofdletters);
