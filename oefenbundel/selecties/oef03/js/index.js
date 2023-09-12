let geboortejaar = prompt("Geef jouw geboortejaar in:");
let lopendeJaartal = prompt("Geef de lopende jaartal in:");
if (Number(lopendeJaartal-geboortejaar)>=18){
    document.write("Vanaf nu mag, kan en beslis ik alles, binnen de wettelijke grenzen.");
}else{
    document.write("Gelukkig heb ik mijn ouders die alles moor me regelen.");
}